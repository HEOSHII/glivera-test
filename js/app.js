const warning = document.querySelector(".warning");
const warningCloseButton = document.querySelector(".warning__closeBtn");
warningCloseButton.onclick = () => (warning.style.display = "none");

const data = {
  tags: [
    "bitcoin",
    "bittorrent",
    "irc",
    "news",
    "privacy",
    "programming",
    "security",
  ],
  posts: [
    {
      id: 1,
      picture: "./assets/post-1.jpg",
      description:
        "The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises",
      name: "Derek Zimmer",
      date: "JUL 25, 2018",
      tags: ["Governments", "Networking", "Open Source", "Privacy", "Security"],
      comments: 0,
    },
    {
      id: 2,
      picture: "./assets/post-2.jpg",
      description: "How to get cheaper flights using a VPN",
      name: "Jayson",
      date: "JUL 24, 2018",
      tags: ["Guides"],
      comments: 0,
    },
    {
      id: 3,
      picture: "./assets/post-3.jpg",
      description:
        "Net Neutrality was repealed, but the fight is far from over",
      name: "Chris Miller",
      date: "JUL 22, 2018",
      tags: ["Governments", "Net Neutrality", "News"],
      comments: 0,
    },
    {
      id: 4,
      picture: "./assets/post-1.jpg",
      description:
        "The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises",
      name: "Derek Zimmer",
      date: "JUL 25, 2018",
      tags: ["Governments", "Networking", "Open Source", "Privacy", "Security"],
      comments: 0,
    },
    {
      id: 5,
      picture: "./assets/post-2.jpg",
      description: "How to get cheaper flights using a VPN",
      name: "Jayson",
      date: "JUL 24, 2018",
      tags: ["Guides"],
      comments: 0,
    },
    {
      id: 6,
      picture: "./assets/post-3.jpg",
      description:
        "Net Neutrality was repealed, but the fight is far from over",
      name: "Chris Miller",
      date: "JUL 22, 2018",
      tags: ["Governments", "Net Neutrality", "News"],
      comments: 0,
    },
  ],
  announcements: [
    "Upcoming Changes (Live Chat, Less Censorship, More Access)",
    "New Servers (US Washington DC)",
    "New Servers (US Denver)",
    "Open Source: Releasing the PIA iOS Client",
    "Opera Extension is now available",
  ],
  popularPosts: [
    "The Gift of Privacy",
    "UK High Court Censors Many Links To Popcorn Time: Useless, Dangerous Gesture",
    "About the PIA Client Security and VPN Security in General",
    "A Private Net Is Just As Fundamental A Right As Freedom Of Speech",
    "Wiretapping Today Just Doesn’t Mean What The Word Meant In The 1990s, So Don’t Fall For That Lie",
  ],
  cloudLinks: [
    "mass",
    "surveillance",
    "intenet",
    "privacy",
    "china",
    "whatsapp",
    "police",
    "nsa",
    "russia",
    "Apple",
    "gchq",
    "internet",
    "censorship",
    "facial",
    "icp",
    "united",
    "kingdom",
    "vpn",
    "tracking",
    "canada",
    "Twitter",
    "fcc",
    "privacy",
    "history",
    "freedom",
    "net",
    "gdpr",
    "file",
    "germany",
    "amazon",
    "boeadhand",
    "encyption",
    "india",
    "microsoft",
    "copyright",
    "sharing",
    "metadata",
    "google",
    "australia",
    "neutrality",
  ],
  sizes: [10, 10, 14, 10, 10, 12, 32, 40],
  stocks: [
    {
      title: "monthly",
      price: 6.95,
      oldPrice: "",
      actual: "",
      text: "Includes all VPN features.",
      save: "",
    },
    {
      title: "two years",
      price: 2.91,
      oldPrice: "166.80",
      actual: 69.95,
      text: "per two years",
      save: 58,
    },
    {
      title: "yearly",
      price: 3.33,
      oldPrice: "83.40",
      actual: 39.95,
      text: "per year",
      save: 52,
    },
  ],
  payWaySvgIcons: {
    visa: "./assets/visa.svg",
    mastercard: "./assets/mastercard.svg",
    amex: "./assets/amex.svg",
    paypal: "./assets/paypal.svg",
    bitcoin: "./assets/bitcoin.svg",
    okpay: "./assets/okpay.svg",
    amazonpay: "./assets/amazonpay.svg",
  },
  footerLists: [
    {
      title: "company",
      list: [
        "About Us",
        "Our Team",
        "Careers",
        "Press",
        "In the Media",
        "VPN Reviews",
        "Companies We Support",
        "Contact Us",
        "Blog",
      ],
    },
    {
      title: "programs",
      list: ["Whitehat Security", "Affiliates"],
    },
    {
      title: "learn more",
      list: ["VPN Encryption", "Android VPN App", "iOS VPN App", "PIA Sitemap"],
    },
    {
      title: "legal",
      list: [
        "Terms Of Service",
        "Privacy Policy",
        "DMCA Policy",
        "Export Control Policy",
      ],
    },
    {
      title: "about",
      list: [
        "Private Internet Access is the leading VPN Service provider specializing in secure, encrypted VPN tunnels which create several layers of privacy and security providing you safety on the internet. Our service is backed by multiple gateways worldwide with access in 28+ countries, 44+ regions.",
        "Map data provided by Google.",
        "PC Mag Editor’s Choice award image reprinted with permission. © 2012 Ziff Davis, Inc. All Rights Reserved. PC Mag quote reprinted from www.pcmag.com with permission. © 2012 Ziff Davis, Inc. All Rights Reserved.",
        "© London Trust Media, Inc. All Rights Reserved.",
      ],
    },
    {
      title: "social",
      list: [
        "./assets/facebook.svg",
        "./assets/twiter.svg",
        "./assets/google.svg",
        "./assets/linkedin.svg",
        "./assets/2sl.svg",
        "./assets/youtube.svg",
      ],
    },
  ],
};

const tagsList = document.querySelector(".main-tags__list");
data.tags.forEach((tag) => (tagsList.innerHTML += `<li>${tag}</li>`));

const postsList = document.querySelector(".posts__list");
data.posts.forEach((post) => {
  let postTags = "";
  post.tags.forEach((tag) => {
    postTags = `${postTags} ${tag}`;
  });
  postsList.innerHTML += `
    <div class="post">
        <div class="post__image">
            <img src="${post.picture}" alt="post-picture">
        </div>
        <div class="post__content">
            <div class="post__description description">
                ${post.description}
            </div>
            <div class="post__info info">
                <div class="post__name name">
                    <p>${post.name}</p>
                    <p>| ${post.date}</p>
                </div>
                <p class="post__tags tags">
                ${postTags} 
                </p>
                <div class="post__comments comments">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none">
                        <path
                        d="M2.75001 9.33335V8.58335H2.00001H1.41667V1.41669H10.5833V8.58335H6.18667H6.00365L5.8412 8.66766L2.75001 10.2719V9.33335Z"
                        stroke="#889099"
                        stroke-width="1.5"/>
                    </svg>
                    <p class="post__comments-count">${post.comments}</p>
                </div>
            </div>
        </div>
    </div>
  `;
});

const announcementsList = document.querySelector(".announcements__list");
data.announcements.forEach(
  (anno) => (announcementsList.innerHTML += `<li><a href="#">${anno}</a></li>`)
);

const popularPostsList = document.querySelector(".popular-posts__list");
data.popularPosts.forEach(
  (post) => (popularPostsList.innerHTML += `<li><a href="#">${post}</a></li>`)
);

const cloudLinks = document.querySelector(".cloud");
const getRandomSize = (arr) => Math.trunc(Math.random() * arr.length);
data.cloudLinks.forEach((link) => {
  const randomSize = data.sizes[getRandomSize(data.sizes)];
  cloudLinks.innerHTML += `<a style="font-size: ${randomSize}px" href="">${link}</a>`;
});

const stockList = document.querySelector(".stock__list");
data.stocks.forEach((stock) => {
  stockList.innerHTML += `
  <div class="stock__item">
    <p class="stock__duration">${stock.title}</p>
    <div class="stock__green-line"></div>
    <div class="stock__prices">
      <div class="stock__price">
        <p class="price-dollar">$</p>
        <p class="price-count">${stock.price}</p>
        <p class="price-per-month">/mo.</p>
      </div>
      <div class="stock__info">
        <p class="info-old">$${stock.oldPrice}</p>
        <p class="info-actual">$${stock.actual}</p>
        <p class="info-text">${stock.text}</p>
      </div>
      <p class="stock__save">Save ${stock.save}%*</p>
    </div>
    <button class="stock__button login-button">SIGN UP</button>
  </div>
  `;
});

const wayToPayList = document.querySelector(".icons__list");
for (key in data.payWaySvgIcons) {
  wayToPayList.innerHTML += `<img src="${data.payWaySvgIcons[key]}"></img>`;
}

const footerContent = document.querySelector(".footer__inner");
data.footerLists.forEach((item) => {
  item.title !== "social" ? pushItemToList(item) : pushSocialIcons(item);
});

function pushItemToList(item) {
  footerContent.innerHTML += `
      <div class="footer__item ${item.title}">
        <p class="footer__list-title">${item.title}</p>
        <ul class="footer__list" id="${item.title}">
        </ul>
      </div>
      `;
  const footerList = document.getElementById(`${item.title}`);
  item.list.forEach(
    (li) =>
      (footerList.innerHTML += `<li>
            <a href="#">${li}</a>
          </li>`)
  );
}

function pushSocialIcons(item) {
  footerContent.innerHTML += `
    <div class="footer__item ${item.title}">
      <p class="footer__list-title">${item.title}</p>
      <ul class="footer__list" id="${item.title}">
      </ul>
    </div>
`;
  const footerList = document.getElementById(`${item.title}`);
  item.list.forEach(
    (li) =>
      (footerList.innerHTML += `<li>
      <a href="#">
        <img src="${li}">
      </a>
    </li>`)
  );
}

const burgerButton = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__navigation");
burgerButton.onclick = () => {
  burgerButton.classList.toggle("opened");
  if (burgerButton.classList.contains("opened")) {
    navigation.style.left = "0";
    navigation.style.right = "0";
    document.body.style.overflow = "hidden";
  } else {
    navigation.style.left = "-100%";
    navigation.style.right = "100%";
    document.body.style.overflow = "auto";
  }
};
