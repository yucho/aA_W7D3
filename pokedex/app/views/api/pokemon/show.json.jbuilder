json.pokemon do
  json.(@pokemon,
    :id,
    :name,
    :attack,
    :defense,
    :moves,
    :poke_type,
    :image_url,
    :item_ids
  )
  json.items do
    @pokemon.item_ids.each do |item_id|
      item = Item.find(item_id)
      json.set! item.id do
        json.(item,
          :id,
          :name,
          :pokemon_id,
          :price,
          :happiness,
          :image_url
        )
      end
    end
  end
end
