"use client";

import React, { useRef, useEffect } from 'react';

type BrushStyle = 'gradient' | 'grid' | 'pixel' | 'watercolor' | 'code';

interface InteractiveBackgroundProps {
    activeSection: string;
}

interface Point {
    x: number;
    y: number;
    age: number;
    vx?: number; // Velocity for some effects
    vy?: number;
    color?: string;
    char?: string;
}

export default function InteractiveBackground({ activeSection }: InteractiveBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>(0);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    // Determine brush style based on section
    const getBrushStyle = (section: string): BrushStyle => {
        switch (section) {
            case 'hero': return 'gradient';
            case 'about': return 'grid';
            case 'work': return 'pixel'; // For Work
            case 'vibecoding': return 'code';
            case 'social': return 'watercolor';
            case 'hobbies': return 'watercolor';
            case 'contact': return 'gradient';
            default: return 'gradient';
        }
    };

    const style = getBrushStyle(activeSection);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Add points on move
            if (activeSection) {
                const codeChars = ['{', '}', '<', '>', ';', 'const', 'let', 'fn', '=>', '0', '1'];
                const codeColors = ['#FF0055', '#0099FF', '#00CC66', '#FFCC00', '#FF6600']; // Syntax highlight colors

                const newPoint: Point = {
                    x: e.clientX,
                    y: e.clientY,
                    age: 0,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    char: style === 'code' ? codeChars[Math.floor(Math.random() * codeChars.length)] : undefined,
                    color: style === 'code' ? codeColors[Math.floor(Math.random() * codeColors.length)] : undefined,
                };
                pointsRef.current.push(newPoint);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [activeSection, style]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Set font context once if possible, but style changes
        };
        resize();
        window.addEventListener('resize', resize);

        // Animation Loop
        const animate = () => {
            // Fade out effect
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // Slight trail fade
            if (style === 'pixel') ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Faster fade for pixels
            if (style === 'code') ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'; // Slower fade for code
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const points = pointsRef.current;

            // Filter dead points
            // Different lifespans for different styles
            const maxAge = style === 'watercolor' ? 100 : style === 'grid' ? 30 : style === 'code' ? 40 : 50;
            pointsRef.current = points.filter(p => p.age < maxAge);

            // Draw based on style
            pointsRef.current.forEach((p, i) => {
                p.age++;

                const opacity = 1 - p.age / maxAge;

                switch (style) {
                    case 'gradient':
                        // Smooth colorful line
                        if (i > 0) {
                            const prev = pointsRef.current[i - 1];
                            ctx.beginPath();
                            ctx.moveTo(prev.x, prev.y);
                            ctx.lineTo(p.x, p.y);
                            // Color shift based on position
                            const hue = (p.x / canvas.width) * 60 + 200; // Blue/Purple range
                            ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${opacity})`;
                            ctx.lineWidth = 15 * opacity;
                            ctx.lineCap = 'round';
                            ctx.stroke();
                        }
                        break;

                    case 'grid':
                        // Grid snap effect
                        const gridSize = 40;
                        const snapX = Math.round(p.x / gridSize) * gridSize;
                        const snapY = Math.round(p.y / gridSize) * gridSize;

                        ctx.fillStyle = `rgba(0, 200, 100, ${opacity * 0.5})`;
                        ctx.fillRect(snapX - 2, snapY - 2, 4, 4);

                        // Connecting lines to neighbors
                        if (i > 0 && Math.random() > 0.5) {
                            const prev = pointsRef.current[i - 1];
                            const prevSnapX = Math.round(prev.x / gridSize) * gridSize;
                            const prevSnapY = Math.round(prev.y / gridSize) * gridSize;

                            // Only draw if close enough
                            const dist = Math.hypot(snapX - prevSnapX, snapY - prevSnapY);
                            if (dist < gridSize * 2) {
                                ctx.beginPath();
                                ctx.moveTo(prevSnapX, prevSnapY);
                                ctx.lineTo(snapX, snapY);
                                ctx.strokeStyle = `rgba(0, 200, 100, ${opacity * 0.2})`;
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                        }
                        break;

                    case 'pixel':
                        // Digital glitch blocks
                        const blockSize = 20;
                        const steps = Math.floor(Math.random() * 3) + 1;
                        for (let s = 0; s < steps; s++) {
                            const offsetX = (Math.random() - 0.5) * 40;
                            const offsetY = (Math.random() - 0.5) * 40;
                            ctx.fillStyle = `rgba(100, 100, 255, ${opacity})`;
                            // Random color glitch
                            if (Math.random() > 0.9) ctx.fillStyle = `rgba(255, 0, 100, ${opacity})`;

                            ctx.fillRect(p.x + offsetX, p.y + offsetY, blockSize * opacity, blockSize * opacity);
                        }
                        break;

                    case 'code':
                        // Floating code characters
                        if (p.char) {
                            ctx.save();
                            ctx.font = `bold ${24 + p.age / 3}px monospace`;
                            ctx.globalAlpha = opacity;
                            ctx.fillStyle = p.color || '#000';

                            // Jitter effect
                            const jitterX = (Math.random() - 0.5) * 2;
                            const jitterY = (Math.random() - 0.5) * 2;

                            ctx.fillText(p.char, p.x + jitterX, p.y + jitterY);
                            ctx.restore();
                        }
                        break;

                    case 'watercolor':
                        // Soft spreading circles
                        p.x += (p.vx || 0);
                        p.y += (p.vy || 0);

                        const radius = 30 + p.age; // Grow over time
                        const hue = 320; // Pink/Rose

                        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
                        grad.addColorStop(0, `hsla(${hue}, 60%, 80%, ${opacity * 0.1})`);
                        grad.addColorStop(1, `hsla(${hue}, 60%, 80%, 0)`);

                        ctx.fillStyle = grad;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                }
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(requestRef.current);
        };
    }, [style]); // Re-bind when style changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-30 mix-blend-multiply opacity-60"
            style={{ touchAction: 'none' }}
        />
    );
}
