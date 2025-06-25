for f in src/data/works/*; do
    filename="${f##*/}" 
    name="${filename%.md}"
    mkdir -p "public/works/$name"
done