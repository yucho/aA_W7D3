json.extract! @guest, :name, :age, :favorite_color
json.gifts do
  json.array! @guest.gifts do |gift|
    json.(gift, :title, :description)
  end
end
