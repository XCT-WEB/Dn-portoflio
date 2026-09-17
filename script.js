const YOUTUBE_CHANNEL = "https://www.youtube.com/@dn-stream/videos";

const videos = [
    {
        title: "How To Make BEAUTIFUL Minecraft Profile Pictures?!",
        description: "In this video, I’ll show you step-by-step how to create an aesthetic and professional-looking Minecraft PFP that stands out on YouTube, Discord, or anywhere online!Whether you’re a content creator or just want a cool profile pic, this tutorial is super easy and beginner-friendly. You’ll learn how to pose your skin, add lighting, and make your PFP look next level 🔥",
        url: "https://www.youtube.com/watch?v=6oGgYypx00o&t=114s",
        tag: "01"
    },
    {
        title: "How to make Minecraft Thumbnails?! (Free)",
        description: "Want to make AWESOME Minecraft thumbnails for FREE? 🎮🔥 In this video, I’ll show you step-by-step how to create eye-catching thumbnails without spending any money!,You’ll learn how to design thumbnails that stand out, get more clicks, and make your videos look professional — even if you're a beginner. No paid software needed!,____________________________________________________________________________,Blockbench: https://www.blockbench.net/Sketchfab: https://sketchfab.com/Bedrock Samples: https://github.com/Mojang/bedrock-sam...Sparks Discord:   / discord  Nomad Sculpt: https://nomadsculpt.com/Photopea: https://www.photopea.com/Mic: TONOR RGB USB Q9S https://www.amazon.ae/TONOR-Microphon...Keyboard: Redragon K552Mouse: Bloody a70Current Subscribers: 1,352You all are the GOATS!____________________________________________________________________________start making better thumbnails today and grow your channel faster 🚀Don’t forget to like 👍 and subscribe 🔔 for more tutorials!____________________________________________________________________________Hashtags(ignore):#Minecraft #MinecraftThumbnail #ThumbnailTutorial #FreeThumbnail #YouTubeTips #MinecraftYouTube #GraphicDesign #YouTubeGrowth #Gaming #MinecraftEdit #ContentCreator #FreeTools #ThumbnailDesign #YouTubeGaming",
        url: "https://www.youtube.com/watch?v=hlQ5vFAGqWM"
    },
    {
        title: "How To Make a Minecraft Youtube Banner?!",
        description: "Want to create a PROFESSIONAL Minecraft YouTube Banner? 🎮✨In this video, I’ll show you step-by-step how to design an awesome Minecraft banner that makes your channel look clean, aesthetic, and eye-catching!This tutorial is simple and beginner-friendly, so anyone can follow along and make a banner that stands out. Learn how to choose the right background, add your name, and make your design look next level 🔥💡 Perfect for:_________________________________________________________________________Blockbench: https://www.blockbench.net/Nomad Sculpt: https://nomadsculpt.com/Photopea: https://www.photopea.com/Sparks Discord:   / discord  Bedrock Samples: https://github.com/Mojang/bedrock-sam...Mic: TONOR RGB USB Q9S https://www.amazon.ae/TONOR-Microphon...Keyboard: Redragon K552Mouse: Bloody a70Current Subscribers: 773You all are the GOATS!_________________________________________________________________________Minecraft YouTubersSmall creatorsAnyone starting a gaming channelMake sure to watch till the end so you don’t miss any tips 👀Don’t forget to like 👍 and subscribe for more Minecraft tutorials!_________________________________________________________________________Hashtags(ignore):#Minecraft #MinecraftBanner #YouTubeBanner #MinecraftDesign #MinecraftEdit #MinecraftArt #Gaming #YouTubeGaming #MinecraftTutorial #BannerDesign #ChannelArt #YouTubeTips #ContentCreator #Gamer #Aesthetic #GraphicDesign #ThumbnailDesign #MinecraftCreator #Viral #EditTutorial",
        url: "https://www.youtube.com/watch?v=Xm9owlo6ZVI",
        tag: "03"
    }
];

function getYouTubeThumbnail(url, quality = "maxresdefault") {
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg` : "";
}

function renderVideos() {
    const grid = document.getElementById("video-grid-popular");
    if (!grid) return;

    grid.innerHTML = videos
        .map(
            (video) => `
        <article class="video-card">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer">
                <img class="thumb" src="${getYouTubeThumbnail(video.url)}" alt="${video.title}" loading="lazy" onerror="this.onerror=null; this.src='${getYouTubeThumbnail(video.url, "hqdefault")}'">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </a>
        </article>
    `
        )
        .join("");
}


const late_videos = [
    {
        title: "How To Edit Minecraft Videos?! | PART 1",
        description: "🎬 Want to learn how to edit Minecraft videos? In PART 1, I’ll be showing you the basics you need to start making better Minecraft content! We’ll go over how to use plots, green screens, Minecraft assets, and useful sources to create clean and professional edits. 🟩✨Whether you're a beginner or already editing Minecraft videos, this series will help you improve your editing skills and make your videos stand out!_________________________________________________________________________OBS Studio: https://obsproject.com/downloadOcam: https://ohsoft.net/eng/ocam.phpCreator Coaster Discord Server:   / discord  Sparks Discord Server:   / discord  DNStream's 2k Editing Pack: https://drive.google.com/drive/folder..._________________________________________________________________________🔥 In this video:• How to use Minecraft plots• How to work with green screens• Where to find Minecraft assets• Useful sources for editing• Tips for getting started with Minecraft video editing👍 Like & Subscribe if you want to see PART 2!#Minecraft #MinecraftEditing #MinecraftTutorial #VideoEditing #MinecraftVideos #MinecraftBedrock #MinecraftJava #MinecraftEditor #EditingTutorial #MinecraftAssets #GreenScreen #MinecraftGreenScreen #ContentCreator #YouTubeTips #MinecraftYouTuber #Gaming #MinecraftContent #VideoEditor #Editing #MinecraftTips",
        url: "https://www.youtube.com/watch?v=eTg-Y5-nYqE&t=13s",
        tag: "01"
    },
    {
        title: "Answering YOUR Questions(4k subs Q&A)",
        description: "🎉 4,000 SUBSCRIBERS?! 🤯 🎉Thank you all SO MUCH for the incredible support! ❤️ We just hit 4K subscribers, and I honestly can’t believe how fast this channel has grown! To celebrate, I’m doing a special Q&A! 👀Got any questions for me? Ask me anything in the comments, and your question might be featured in the video! 🔥Thank you for being part of this journey — 4K down, and we’re only getting started! 🚀_________________________________________________________________________hashtags(ignore):#4KSubscribers #QandA #QA #Minecraft #MinecraftBedrock #MinecraftYouTuber #Gaming #YouTube #YouTuber #SubscriberMilestone #ThankYou #DNStream #MinecraftPvP #GamingCommunity",
        url: "https://www.youtube.com/watch?v=1CzLOxJVLRI&t=922s",
        tag: "02"
    },
    {
        title: "How To Make BEAUTIFUL Minecraft Highlights On PC?!",
        description: "🎮 How To Make Highlights On Minecraft Players! ✨Want to make your Minecraft thumbnails look more professional? In this video, I’ll show you how to easily add highlights/glows around Minecraft players to make them stand out and grab attention! 🔥Perfect for Minecraft thumbnails, PvP videos, BedWars, SkyWars, Shorts, and more! ⚔️👍 Like the video if it helped!🔔 Subscribe for more Minecraft thumbnail & editing tutorials!_________________________________________________________________________Blockbench: https://www.blockbench.net/Nomad Sculpt: https://nomadsculpt.com/Photopea: https://www.photopea.com/DNStream 2k Editing Pack: https://rekonise.com/dnstreams-2k-edi.._____________________________________________________________________Hashtags(ignore):#Minecraft #MinecraftTutorial #MinecraftThumbnails #MinecraftEditing #MinecraftThumbnail #ThumbnailTutorial #MinecraftPvP #MinecraftBedrock #MinecraftJava #YouTubeThumbnails #GamingThumbnails #MinecraftTips #ThumbnailEditing #MinecraftCreator",
        url: "https://www.youtube.com/watch?v=_Z2VFokwlbI",
        tag: "03"
    }
];

function getYouTubeThumbnail(url, quality = "maxresdefault") {
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg` : "";
}

function renderLatestVideos() {
    const grid = document.getElementById("video-grid-latest");
    if (!grid) return;

    grid.innerHTML = late_videos
        .map(
            (video) => `
        <article class="video-card">
            <a href="${video.url}" target="_blank" rel="noopener noreferrer">
                <img class="thumb" src="${getYouTubeThumbnail(video.url)}"
                     alt="${video.title}" loading="lazy"
                     onerror="this.onerror=null; this.src='${getYouTubeThumbnail(video.url, "hqdefault")}'">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </a>
        </article>
    `
        )
        .join("");
}



function setupNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open menu");
        });
    });
}

function setupActiveSection() {
    const navAnchors = [...document.querySelectorAll(".nav-links a")];
    const sections = navAnchors
        .map((anchor) => document.querySelector(anchor.getAttribute("href")))
        .filter(Boolean);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = `#${entry.target.id}`;
                navAnchors.forEach((anchor) => {
                    anchor.classList.toggle("active", anchor.getAttribute("href") === id);
                });
            });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form || !status) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const message = String(data.get("message") || "").trim();

        if (!name || !email || !message || !email.includes("@")) {
            status.textContent = "Please fill in a name, valid email, and message.";
            status.classList.add("error");
            return;
        }

        status.classList.remove("error");
        status.textContent = `Thanks, ${name}. I’ll get back to you soon.`;
        form.reset();
    });
}

document.getElementById("year").textContent = String(new Date().getFullYear());
renderVideos();
setupNav();
setupActiveSection();
setupContactForm();
renderLatestVideos();
