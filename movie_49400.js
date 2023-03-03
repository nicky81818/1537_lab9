


$(document).ready(function () {
    $.ajax({
        url: "https://yts.mx/api/v2/movie_details.json?movie_id=49400",
        type: "GET",
        success: function(res) {
            console.log(res)
            $("main").append(
                    `
                    <div class="movie">
                        <img src="${res.data.movie.large_cover_image}" alt="${res.data.movie.title}">
                    </div>
                    <div class="movie-info">
                        <h3>${res.data.movie.title}</h3>
                        <p>Year: ${res.data.movie.year}</p>
                        <p>${res.data.movie.description_full}</p>
                        <p>Genres: ${res.data.movie.genres}</p>
                        <p>Rating: ${res.data.movie.rating}</p>
                        <p>Runtime: ${res.data.movie.runtime} minutes</p>
                        <p>Language: ${res.data.movie.language}</p>
                        <p>Link: ${res.data.movie.url}</p>
                        
                    </div>
                    `
                )
        }
    })
    

})