const propertySchema = {
    type: String,
    location: String,
    rooms: Number,
    img: String,
    price: Number,
    area: String,
    status: String
};

 let properties= [
    {
        id: 1,
        type: "House",
        location: "Plovdiv",
        rooms: "4",
        // img: "https://cdn.vox-cdn.com/thumbor/zVuv0s-NzoqRQef_zb91-X8sT88=/0x0:1800x1168/1200x800/filters:focal(733x429:1021x717)/cdn.vox-cdn.com/uploads/chorus_image/image/63048549/logan_apartments.6.jpg",
        price: 90000,
        area: '160',
        status: "For Sale",
    },
    {
        id: 2,
        type: "Apartment",
        location: "Plovdiv",
        rooms: "3",
        // img: "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
        price: 60000,
        area: '90',
        status: "For Sale",
    },
   
]


module.exports = properties