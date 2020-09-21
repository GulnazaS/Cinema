
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav:true,
    });
  });

  const genre__1 = 'фэнтези';
  const genre__2 = 'драма';
  const genre__3 = 'комедия';
  const genre__4 = 'мультфильм';
  const genre__5 = 'боевик';
  const genre__6 = 'фантастика';




  const films = [
    {
      start: '10.00',
      name: 'Человек-паук',
      genre: `${genre__1}, ${genre__2}, ${genre__3} `
    },
    {
      start: '12.00',
      name: 'Собачья жизнь  2',
      genre: `${genre__1}, ${genre__2}, ${genre__3} `
    },
    {
      start: '14.00',
      name: 'История игрушек 4',
      genre: `${genre__4}, ${genre__1}, ${genre__3} `
    },
    {
      start: '16.00',
      name: 'Люди в черном: Интернэшнл',
      genre: `${genre__6}, ${genre__5}, ${genre__3} `
    }
  ];
// console.log(films[0])

const film__start__1 = document.getElementById('film__start__1');
const film__name__1 = document.getElementById('film__name__1');
const film__genre__1 = document.getElementById('film__genre__1');

film__start__1.innerHTML = films[0].start;
film__name__1.innerHTML = films[0].name;
film__genre__1.innerHTML = films[0].genre;


// console.log(film__start__1)