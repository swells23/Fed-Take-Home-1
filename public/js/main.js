function setLanguage() {

    var langSelect = document.getElementById("language");
    var currentLang = langSelect.options[langSelect.selectedIndex].value;

    if (currentLang == 'EN') {

        var data;

        function loadJSON(callback) {

            var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open('GET', '/data/en_US.json', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    callback(xhr.responseText);
                }
            };
            xhr.send(null);
        }

        loadJSON(function (response) {
            // Parse JSON string into object
            data = JSON.parse(response);
            
            document.getElementById("description").innerHTML = data.description;
            document.getElementById("slide1").src = data.gallery[0].src;
            document.getElementById("slide2").src = data.gallery[1].src;
            document.getElementById("slide3").src = data.gallery[2].src;
            document.getElementById("slide4").src = data.gallery[3].src;

            document.getElementById("slide1").alt = data.gallery[0].text;
            document.getElementById("slide2").alt = data.gallery[1].text;
            document.getElementById("slide3").alt = data.gallery[2].text;
            document.getElementById("slide4").alt = data.gallery[3].text;
            
            /*document.getElementById("video").src = data["video-embed"];
            document.getElementById("background").innerHTML = data.snippets[0] + "<br>" + data.snippets[1] + "<br>" + data.snippets[2];
            data["episode-list"].forEach(function(item) {
                document.getElementById("episodes").innerHTML += item.season + " " + item.name + " " + item.rating + "<br>";
            });*/

            var index = data["episode-list"];

            document.getElementById("s1").innerHTML = ""; // Reset div
            document.getElementById("s1").innerHTML += "S" + index[12].season + " " + index[12].name + " " + index[12].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[14].season + " " + index[14].name + " " + index[14].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[6].season + " " + index[6].name + " " + index[6].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[7].season + " " + index[7].name + " " + index[7].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[11].season + " " + index[11].name + " " + index[11].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[8].season + " " + index[8].name + " " + index[8].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[4].season + " " + index[4].name + " " + index[4].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[2].season + " " + index[2].name + " " + index[2].rating + "<br><br>";

            document.getElementById("s2").innerHTML = ""; // Reset div
            document.getElementById("s2").innerHTML += "S" + index[15].season + " " + index[15].name + " " + index[15].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[13].season + " " + index[13].name + " " + index[13].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[10].season + " " + index[10].name + " " + index[10].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[9].season + " " + index[9].name + " " + index[9].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[5].season + " " + index[5].name + " " + index[5].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[3].season + " " + index[3].name + " " + index[3].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[16].season + " " + index[16].name + " " + index[16].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[1].season + " " + index[1].name + " " + index[1].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[0].season + " " + index[0].name + " " + index[0].rating + "<br><br>";
        });

    } else if (currentLang == 'PG') {

        var data;

        function loadJSON(callback) {

            var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open('GET', '/data/la_PG.json', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    callback(xhr.responseText);
                }
            };
            xhr.send(null);
        }

        loadJSON(function (response) {
            // Parse JSON string into object
            data = JSON.parse(response);
            
            document.getElementById("description").innerHTML = data.description;
            document.getElementById("slide1").src = data.gallery[0].src;
            document.getElementById("slide2").src = data.gallery[1].src;
            document.getElementById("slide3").src = data.gallery[2].src;
            document.getElementById("slide4").src = data.gallery[3].src;

            document.getElementById("slide1").alt = data.gallery[0].text;
            document.getElementById("slide2").alt = data.gallery[1].text;
            document.getElementById("slide3").alt = data.gallery[2].text;
            document.getElementById("slide4").alt = data.gallery[3].text;
            
            /*document.getElementById("video").src = data["video-embed"];
            document.getElementById("background").innerHTML = data.snippets[0] + "<br>" + data.snippets[1] + "<br>" + data.snippets[2];
            data["episode-list"].forEach(function(item) {
                document.getElementById("episodes").innerHTML += item.season + " " + item.name + " " + item.rating + "<br>";
            });*/

            var index = data["episode-list"];

            document.getElementById("s1").innerHTML = ""; // Reset div
            document.getElementById("s1").innerHTML += "S" + index[12].season + " " + index[12].name + " " + index[12].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[14].season + " " + index[14].name + " " + index[14].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[6].season + " " + index[6].name + " " + index[6].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[7].season + " " + index[7].name + " " + index[7].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[11].season + " " + index[11].name + " " + index[11].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[8].season + " " + index[8].name + " " + index[8].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[4].season + " " + index[4].name + " " + index[4].rating + "<br>";
            document.getElementById("s1").innerHTML += "S" + index[2].season + " " + index[2].name + " " + index[2].rating + "<br><br>";

            document.getElementById("s2").innerHTML = ""; // Reset div
            document.getElementById("s2").innerHTML += "S" + index[15].season + " " + index[15].name + " " + index[15].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[13].season + " " + index[13].name + " " + index[13].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[10].season + " " + index[10].name + " " + index[10].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[9].season + " " + index[9].name + " " + index[9].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[5].season + " " + index[5].name + " " + index[5].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[3].season + " " + index[3].name + " " + index[3].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[16].season + " " + index[16].name + " " + index[16].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[1].season + " " + index[1].name + " " + index[1].rating + "<br>";
            document.getElementById("s2").innerHTML += "S" + index[0].season + " " + index[0].name + " " + index[0].rating + "<br><br>";
        });

    } else {
        console.log("Data not found.");
    }
}

window.onload = setLanguage;


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

