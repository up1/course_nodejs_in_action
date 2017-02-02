echo "Start..."
echo "Step 1 :: Delete index"
node 0_delete_index.js
echo "Step 2 :: Import Alert from csv file to elasticsearch"
node 1_import_csv.js
echo "Step 3 :: Update data in elasticsearch"
node 2_update_location_with_csv.js
echo "Finished"
