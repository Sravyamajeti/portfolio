.PHONY: setup dev build start lint push

# Install all dependencies
setup:
	npm install

# Run the local development server (Next.js)
dev:
	npm run dev

# Build the project for production
build:
	npm run build

# Start the production server
start:
	npm run start

# Run the linter
lint:
	npm run lint

# Add, commit, and push changes to Git
# Usage: make push m="your commit message"
# Default message is "Update" if not provided
push:
	git add .
	git commit -m "$(m)" || git commit -m "Update"
	git push
