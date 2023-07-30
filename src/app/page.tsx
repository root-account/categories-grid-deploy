import CategoryCard from "@/components/categoryCard"

const categoriesData = [
  {
    title: 'Big 5',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083036/big-5.jpg',
    url: 'https://www.go2africa.com/holiday-types/big-5-safari/why-go'
  },
  {
    title: 'Great migration',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083041/great-migration.jpg',
    url: 'https://www.go2africa.com/holiday-types/migration-safari/why-go'
  },
  {
    title: 'Luxury',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083047/luxury.jpg',
    url: 'https://www.go2africa.com/holiday-types/africa-luxury-safari/why-go'
  },
  {
    title: 'Adventure',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083029/adventure.jpg',
    url: 'https://www.go2africa.com/holiday-types/africa-adventure-travel/why-go'
  },
  {
    title: 'Safari & Beach',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083049/safari-and-beach.jpg',
    url: 'https://www.go2africa.com/holiday-types/safari-beach-holiday/why-go'
  },
  {
    title: 'All inclusive',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083032/all-inclusive.jpg',
    url: 'https://www.go2africa.com/holiday-types/all-inclusive-african-safaris/why-go'
  },
  {
    title: 'Gorilla trekking',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083038/gorila-trekking.jpg',
    url: 'https://www.go2africa.com/holiday-types/gorilla-trekking/why-go'
  },
  {
    title: 'Honeymoon',
    image: 'https://cdn-images.go2africa.com/wp-content/uploads/2018/08/22083044/honeymoon.jpg',
    url: 'https://www.go2africa.com/holiday-types/africa-honeymoon/why-go'
  },
]

export default function Home() {
  return (


    <div className="w-full min-h-screen pb-10">

      <h2 className="text-center my-10 text-5xl font-semibold text-main">Popular Safaris</h2>

      <div className="w-full grid md:grid-cols-4 mb-10">

        {categoriesData.map((category, index) => (
          <CategoryCard title={category.title} image={category.image} url={category.url}/>
        ))}
    
      </div>

      <div className="w-full text-center">
        <h4 className="section-heading">
          Search through 300+ itinerary ideas.
        </h4> 
        <h5 className="section-subheading">
          Then customise yours with an expert.
        </h5> 
      </div>

    </div>
  )
}
