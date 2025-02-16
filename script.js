document.getElementById('songSelectorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const mood = document.getElementById('mood').value;

    // Define the Spotify links for each mood
    const recommendations = {
        happy: {
            song: [
                "https://open.spotify.com/track/6k3XXCE1ZzwevQlxf8dNaw?si=c4649573b05d421c",
                "https://open.spotify.com/track/0l6g8Z8mqGbGXFOjigYetD?si=22470918c6914851", 
                "https://open.spotify.com/track/4bD9z9qa4qg9BhryvYWB7c?si=385f62add91f4e15"
               
            ],
            playlist: [
                "https://open.spotify.com/playlist/37i9dQZF1DWTwbZHrJRIgD?si=P_X7AiVrSg-J485vKN0lvw"
            ]
        },
        sad: {
            song: [
                "https://open.spotify.com/track/4VsP4Dm8gsibRxB5I2hEkw?si=30caeb88ac6a4820", // Sad song
                "https://open.spotify.com/track/79OpcqzQvmqmy92saiWA4R?si=6a68406fb6ca453a",
                "https://open.spotify.com/track/6id2VDvF1e9d0UHN0j6LVG?si=9463837e23a94ae0",
                "https://open.spotify.com/track/5F79ZdjOwGOhUKRHx94sr1?si=e2804d6e2b3b4f3b"
                
            ],
            playlist: [
                "https://open.spotify.com/playlist/2sOMIgioNPngXojcOuR4tn?si=aceJhRCgT2aXLCSZhkshgw" // Sad Playlist
                
            ]
        },
        party: {
            song: [
                "https://open.spotify.com/track/16kiQQ4BoLHDyj5W2fkfNK?si=dd36809030e14fe5", // Party song
                "https://open.spotify.com/track/6mdLX10dvBb7rGYbMXpKzz?si=01d57d48dd5541a7",
                "https://open.spotify.com/track/4eu27jAU2bbnyHUC3G75U8?si=10a544553d544bcb",
                
            ],
            playlist: [
                "https://open.spotify.com/playlist/4F9XjRMCeyxlmysK16V85W?si=Ulrp8jMJQy-7GpD1U7G6fQ"
            ]
        },
        chill: {
            song: [
                "https://open.spotify.com/track/0WdbnNKO0Jt4BZACSDQh44?si=685aca9ecd7e4cad",
                "https://open.spotify.com/track/3ctaMit7CuiHIPVYrRvm15?si=a57e0c869ae647de",
                "https://open.spotify.com/track/0rUN8ascPVT9iiLzC5ocPw?si=a576b9a311194a6d"
            ],
            playlist: [
                "https://open.spotify.com/playlist/55PVuXcePN1SJUh8yczGuR?si=P1OZB8M6QfC2URbK1EgvxQ"
            ]
        },
        workout: {
            song: [
                "https://open.spotify.com/track/7vZz8oJ5qAqB9MghufRK5k?si=a721db1570774ccf",
                "https://open.spotify.com/track/7FROOyFNVDaTbnnBcghUXL?si=a68b645d1e89402c",
                "https://open.spotify.com/track/7o1yzUVkQt2Gto5yYvzo2T?si=9afcadd23b1b4a72",
                "https://open.spotify.com/track/3kSBSSsXtebECjCggW87yq?si=e1f74aa8f99d4403",
                "https://open.spotify.com/track/5zlB4HfyZ4C5EbgbHPkYIN?si=2639b4c9d72d4725"
                
            ],
            playlist: [
                "https://open.spotify.com/playlist/7oVarqwTiJ75pMjsYKDCFl?si=ZCuq9ddeRc--I1cVIrqKWQ"
            ]
        }
    };

    const selectedCategory = recommendations[mood][type];
    const randomSelection = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];

    
    window.open(randomSelection, '_blank');
});
