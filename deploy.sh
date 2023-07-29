echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* kitob@193.111.11.98:/var/www/193.111.11.98

echo "Done!"