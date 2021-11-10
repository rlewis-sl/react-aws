aws s3 mb s3://algo-pop-react-test
aws s3api put-bucket-policy --bucket algo-pop-react-test --policy "{\"Version\": \"2012-10-17\", \"Statement\": [{\"Sid\": \"PublicReadGetObject\", \"Effect\": \"Allow\", \"Principal\": \"*\", \"Action\": \"s3:GetObject\", \"Resource\": \"arn:aws:s3:::algo-pop-react-test/*\"}]}"

cd ..\build
aws s3 sync ./ s3://algo-pop-react-test

aws s3 website s3://algo-pop-react-test --index-document index.html --error-document index.html
