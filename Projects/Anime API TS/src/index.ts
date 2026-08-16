const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const api = `https://api.jikan.moe/v4/top/anime`;

// Select Elements
const CardElement = document.querySelector('.card-element') as HTMLDivElement;


// types

// interface AnimeList {
//     url: string | null;
//     Title: string | null;
//     Score: number | null;
// }

type animeList = {
    url: string | null,
    Title: string | null;
    Score: number | null;
    genre: string;
    animeName: string;
    studioName: string;
    name:string
}

const styles = "group relative bg-paper border-[3px] border-ink [clip-path:polygon(0_0,100%_0,100%_92%,93%_100%,0_100%)] transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-1 shadow-[6px_6px_0_0_theme(colors.ink)]"

const AnimeFetch = async () => {
    const response:any = await fetch(api);
    const { data } = await response.json();

    // console.log(data);

    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]);
    // }
    for (const list of data) {  

    const article:HTMLElement = document.createElement('article');
    article.className = styles;
    
    // Card HTML & Style
    article.innerHTML = `<div class="relative aspect-[3/4] border-b-[3px] border-ink overflow-hidden bg-[linear-gradient(160deg,theme(colors.seal),theme(colors.ink))]">
          <div class="absolute inset-0 opacity-25 [background-image:radial-gradient(theme(colors.paper)_1.5px,transparent_1.5px)] [background-size:9px_9px] mix-blend-overlay"></div>
          <img src=${`${list.images.jpg.image_url}`} class="absolute inset-0 m-auto w-fit h-fit text-7xl text-paper/20 group-hover:scale-110 transition-transform duration-500" alt="fa-solid fa-ghost" />

          <span class="absolute top-0 left-3 bg-indigo text-paper font-mono text-[10px] tracking-widest uppercase px-2 py-1 [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]">Complete</span>

          <div class="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-seal ring-[3px] ring-seal ring-offset-2 ring-offset-paper flex flex-col items-center justify-center rotate-[-12deg] group-hover:rotate-0 transition-transform duration-300">
            <span class="font-mono font-bold text-paper text-lg leading-none">${list.score}</span>
            <span class="font-mono text-paper/80 text-[7px] tracking-[0.2em] mt-0.5">SCORE</span>
          </div>
        </div>

        <div class="relative">
          <span class="absolute -left-[9px] top-[164px] w-4 h-4 rounded-full bg-paperDark border-[3px] border-ink"></span>
          <span class="absolute -right-[9px] top-[164px] w-4 h-4 rounded-full bg-paperDark border-[3px] border-ink"></span>
        </div>

        <div class="p-4">
            ${list.genres.forEach((genre: string) => (`
                <p class="font-mono text-[10px] tracking-widest text-seal uppercase mb-1">${genre.name}</p>`
            ))}
            <h3 class="font-display text-xl leading-snug mb-1">${list.title}</h3>
            <p class="text-ink/50 text-xs mb-3">Studio ${list.studios[0].name}</p>

          <div class="border-t-2 border-dashed border-ink/30 my-3"></div>

          <div class="flex items-center justify-between font-mono text-xs">
            <span class="bg-ink text-paper px-2 py-1">EP 24/24</span>
            <span class="flex items-center gap-0.5 text-gold">
              <i class="fa-solid fa-star text-[10px]"></i>
              <i class="fa-solid fa-star text-[10px]"></i>
              <i class="fa-solid fa-star text-[10px]"></i>
              <i class="fa-solid fa-star text-[10px]"></i>
              <i class="fa-solid fa-star-half-stroke text-[10px]"></i>
            </span>
          </div>

          <div class="flex flex-wrap gap-1.5 mt-3">
            <span class="text-[10px] uppercase tracking-wide border border-ink/40 rounded-full px-2 py-0.5 text-ink/70">${`Cyberpunk`}</span>
            <span class="text-[10px] uppercase tracking-wide border border-ink/40 rounded-full px-2 py-0.5 text-ink/70">${`Sword`}</span>
          </div>
        </div>`;

        CardElement.append(article);
    }
}


AnimeFetch();