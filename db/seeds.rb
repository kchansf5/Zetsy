# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  username: 'demouser',
  password: 'password'
)
Product.create!(
  product_name: 'wooden chair',
  description: 'a nice chair made out of solid acacia',
  price: 79.99,
  image_url: 'https://images.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dw03df652e/images/2691730/2691730_1.jpg?sw=500&sh=500'
)

Product.create!(
  product_name: 'metal chair',
  description: 'a sturdy metal chair',
  price: 99.99,
  image_url: 'https://images.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dwa1f94f96/images/3515476/3515476_1.jpg?sw=500&sh=500'
)

Product.create!(
  product_name: 'blue arm chair',
  description: 'a nice blue chair',
  price: 39.99,
  image_url: 'https://images.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dw2817df41/images/3284665/3284665_1.jpg?sw=500&sh=500'
)

Product.create!(
  product_name: 'doggo',
  description: 'golden doggo',
  price: 9999999.99,
  image_url: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/goldendoodle-dog-breed-pictures/thumbs/thumbs_puppy-4_1.jpg'
)
