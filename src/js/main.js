/* UI */
function scrollTo(link, target) {
  link.click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top - 30
    }, 800);
  });
}

scrollTo($('#talkslink'), $('#talks'));
scrollTo($('#aboutlink'), $('#about'));

/* Handlebars */
var data = [
  {
    num: 1,
    name:"Talk One",
    date: "October 11, 2014",
    card: [
      {
        num: 1,
        speaker: "Ariel Sobel",
        title: "Strip, Don't Tease",
        description: "This talk emphasizes the importance of emotional vulnerability and openness.She suggests college students should be in touch with their emotions in order to have more fulfilling, honest relationships with their friends, family, and community at large.",
        img: "img/demo/ariel.jpg",
        url: "https://www.youtube.com/watch?v=a501jtIprzc"
      },
      {
        num: 2,
        speaker: "Alex Zhang",
        title: "Expand Your Mind: Lucid Dreaming 101",
        description: "Proving that Inception might not be so far fetched, this talk is a step-by-step guide for the process of lucid dreaming and its potential to impact our society's thought. He challenges his audience to push their creative limits and explore in new ways.",
        img: "img/demo/alex.jpg",
        url: "https://www.youtube.com/watch?v=K3i77WLegh8"
      },
      {
        num: 3,
        speaker: "Logan Heley",
        title: "American Politics: We Need You",
        description: "A talk for society: that we should return to more active political engagement, dispelling the myth that our present political atmosphere is beyond saving. He suggests Americans need to more directly involve themselves in their political process if they hope to see true social change.",
        img: "img/demo/logan.jpg",
        url: "https://www.youtube.com/watch?v=OXNX2MeN0Yk"
      },
      {
        num: 4,
        speaker: "Michelle Lau",
        title: "How To Make Love Like A Pornstar: Results May Vary",
        description: "A talk focusing on the demand-side of trafficking; she studies porn and the negative side effects it has on relationships and individuals. By bringing these new facts to light, she hopes her audience will make a more informed decision on when to engage in porn.",
        img: "img/demo/michelle.jpg",
        url: "https://www.youtube.com/watch?v=yJPsRHK7c0c"
      }
    ]
  },
  // {
  //   num: 2,
  //   name:"Talk Two",
  //   date: "December 5, 2014",
  //   card: [
  //     {
  //       num: 1,
  //       speaker: "Ariel Sobel",
  //       title: "Strip, Don't Tease",
  //       description: "This talk emphasizes the importance of emotional vulnerability and openness.She suggests college students should be in touch with their emotions in order to have more fulfilling, honest relationships with their friends, family, and community at large.",
  //       img: "img/demo/ariel.jpg",
  //       url: "https://www.youtube.com/watch?v=a501jtIprzc"
  //     },
  //     {
  //       num: 2,
  //       speaker: "Alex Zhang",
  //       title: "Expand Your Mind: Lucid Dreaming 101",
  //       description: "Proving that Inception might not be so far fetched, this talk is a step-by-step guide for the process of lucid dreaming and its potential to impact our society's thought. He challenges his audience to push their creative limits and explore in new ways.",
  //       img: "img/demo/alex.jpg",
  //       url: "https://www.youtube.com/watch?v=K3i77WLegh8"
  //     },
  //     {
  //       num: 3,
  //       speaker: "Logan Heley",
  //       title: "American Politics: We Need You",
  //       description: "A talk for society: that we should return to more active political engagement, dispelling the myth that our present political atmosphere is beyond saving. He suggests Americans need to more directly involve themselves in their political process if they hope to see true social change.",
  //       img: "img/demo/logan.jpg",
  //       url: "https://www.youtube.com/watch?v=OXNX2MeN0Yk"
  //     },
  //     {
  //       num: 4,
  //       speaker: "Michelle Lau",
  //       title: "How To Make Love Like A Pornstar: Results May Vary",
  //       description: "A talk focusing on the demand-side of trafficking; she studies porn and the negative side effects it has on relationships and individuals. By bringing these new facts to light, she hopes her audience will make a more informed decision on when to engage in porn.",
  //       img: "img/demo/michelle.jpg",
  //       url: "https://www.youtube.com/watch?v=yJPsRHK7c0c"
  //     }
  //   ]
  // }
];
var templateSource = $("#talk-template").html();

var template = Handlebars.compile(templateSource);
$("#talks").append(template(data));
