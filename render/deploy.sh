#!/bin/bash

# Render Deployment Script for Shortcut Sensei
# This script helps automate the deployment process to Render

set -e

echo "🚀 Starting Render deployment for Shortcut Sensei..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."

    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18 or later."
        exit 1
    fi

    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm."
        exit 1
    fi

    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git."
        exit 1
    fi

    print_success "All dependencies are installed."
}

# Validate environment variables
validate_env() {
    print_status "Validating environment configuration..."

    if [ -z "$SUPABASE_CONNECTION_STRING" ]; then
        print_error "SUPABASE_CONNECTION_STRING environment variable is not set."
        print_status "Please set your Supabase Postgres connection string:"
        echo "export SUPABASE_CONNECTION_STRING='your_supabase_postgres_connection_string'"
        exit 1
    fi

    if [ -z "$JWT_SECRET" ]; then
        print_warning "JWT_SECRET not set. Render will generate one automatically."
    fi

    if [ -z "$EMAIL_USER" ] || [ -z "$EMAIL_PASS" ]; then
        print_warning "Email credentials not set. Email functionality will not work."
    fi

    print_success "Environment validation completed."
}

# Build the application
build_app() {
    print_status "Building the application..."

    # Install root dependencies
    npm install

    # Install backend dependencies
    cd backend
    npm install
    cd ..

    # Build frontend
    npm run build

    print_success "Application built successfully."
}

# Run tests
run_tests() {
    print_status "Running tests..."

    # Run backend tests if they exist
    if [ -f "backend/package.json" ] && grep -q '"test"' "backend/package.json"; then
        cd backend
        npm test
        cd ..
        print_success "Backend tests passed."
    else
        print_warning "No backend tests found."
    fi

    # Run frontend tests if they exist
    if grep -q '"test"' "package.json"; then
        npm test -- --watchAll=false
        print_success "Frontend tests passed."
    else
        print_warning "No frontend tests found."
    fi
}

# Create deployment package
create_deployment_package() {
    print_status "Creating deployment package..."

    # Create render-deploy directory
    mkdir -p render-deploy

    # Copy necessary files
    cp -r backend render-deploy/
    cp -r build render-deploy/ 2>/dev/null || mkdir -p render-deploy/build
    cp package.json render-deploy/
    cp render/Dockerfile render-deploy/
    cp render/nginx.conf render-deploy/

    # Create .env.example for reference
    cp render/.env.example render-deploy/

    print_success "Deployment package created in render-deploy/"
}

# Show deployment instructions
show_instructions() {
    echo
    print_success "Deployment preparation completed!"
    echo
    echo "📋 Next steps for Render deployment:"
    echo
    echo "1. 📦 Upload the 'render-deploy' folder to your GitHub repository"
    echo "2. 🌐 Go to https://render.com and sign in"
    echo "3. ➕ Click 'New +' and select 'Web Service'"
    echo "4. 🔗 Connect your GitHub repository"
    echo "5. ⚙️  Configure the service:"
    echo "   - Name: shortcut-sensei"
    echo "   - Runtime: Docker"
    echo "   - Build Command: (leave default)"
    echo "   - Start Command: (leave default)"
    echo
    echo "6. 🔐 Set environment variables in Render dashboard:"
    echo "   - SUPABASE_CONNECTION_STRING: $SUPABASE_CONNECTION_STRING"
    echo "   - JWT_SECRET: (generate a secure secret)"
    echo "   - EMAIL_USER: your-email@gmail.com"
    echo "   - EMAIL_PASS: your-gmail-app-password"
    echo "   - NODE_ENV: production"
    echo
    echo "7. 🚀 Click 'Create Web Service'"
    echo
    echo "8. 📊 Monitor the build logs and fix any issues"
    echo
    echo "9. 🌍 Once deployed, your app will be available at:"
    echo "   https://your-service-name.onrender.com"
    echo
}

# Main deployment process
main() {
    echo "🎯 Shortcut Sensei - Render Deployment Script"
    echo "=============================================="

    check_dependencies
    validate_env
    build_app
    run_tests
    create_deployment_package
    show_instructions

    print_success "Ready for Render deployment! 🎉"
}

# Run main function
main "$@"