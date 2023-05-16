//hw3
// Geolocation Configuration (Geolocation Configuration). 
// Contrast between latitude (longitude) and longitude (longitude). 
// Other members 3 members of the shipwreck. Show everything.

const geolocation=[
    {
        latitude: 32423,
        longitude: 243454,

    },
    {
        latitude: 3535,
        longitude: 53543,

    }
    ,
    {
        latitude: 542552,
        longitude: 356536,

    }
];

for(let i = 0; i<geolocation.length;i++)
{
    for(const prop in geolocation[i])
        document.write(`${prop}: ${geolocation[i][prop]} ,`);
    document.write("<br>");
}