
<h3 align="center">

  <p align="center"><img src="https://img.shields.io/badge/WLCM%20TO -RAHAD MEDIA DOWNLOADER-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">  

</h3>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Neuton&size=25&color=30FF40&background=000000&center=true&vCenter=true&width=360&height=60&lines=Hello+World%2C+I'm+Mohammad-Rahad+Here+🤙;𝙸𝚃'𝚜+𝙽𝙾𝚃+𝙰+𝙹𝚄𝚂𝚃+𝙽𝙰𝙼𝙴+𝙱𝚁𝙾+🥱;𝙸𝚃'𝚜+𝙰+𝙱𝚁𝙰𝙽𝙳+🔥;Respect+Mohammad-Rahad+🥀;Thanks+My+All+Friend+🤙+🥰)](https://git.io/typing-svg)


<a href="https://www.npmjs.com/package/rahad-media-downloader"><img alt="npm version" src="https://img.shields.io/npm/v/rahad-media-downloader.svg?style=flat-square"></a>
<img alt="version" src="https://img.shields.io/github/package-json/v/MR-RAHAD-511/rahad-media-downloader?label=github&style=flat-square">
<a href="https://www.npmjs.com/package/rahad-media-downloader"><img src="https://img.shields.io/npm/dm/rahad-media-downloader.svg?style=flat-square" alt="npm downloads"></a><br>
[![Socket Badge](https://socket.dev/api/badge/npm/package/rahad-media-downloader)](https://socket.dev/npm/package/rahad-media-downloader) 
[![js dilvr](https://data.jsdelivr.com/v1/package/npm/rahad-media-downloader/badge)](https://www.jsdelivr.com/package/npm/rahad-media-downloader)

## Instalation :
```bash
> npm i rahad-media-downloader
```

## Example (Facebook)
```js
const fb = require('rahad-media-downloader');

const facebookUrl = 'https://www.facebook.com/share/v/Bbc4kPH9t1XXSJrA/?mibextid=oFDknk';

async function mainFB() {
  try {
    const result = await fb.rahadfbdl(facebookUrl);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

mainFB();
```
## Output Example Facebook
```
{
"Author": "Mohammad Rahad",
"message": "any problem please contact me",
"Facebook": "https://www.facebook.com/md.rahad.hosain18"
};
{
  "success": true,
  "video_length": "",
  "download": [
    {
      "quality": "720p (HD)",
      "url": "https://video-ord5-2.xx.fbcdn.net/o1/v/t2/f1/m69/GDCk9RltDRbSAGsDAHh8VVoi3gBibmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-ord5-2.xx.fbcdn.net&_nc_cat=100&strext=1&vs=66ee7a75d96178b3&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRENrOVJsdERSYlNBR3NEQUhoOFZWb2kzZ0JpYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKb3c1aGhGb1BieENRb0JBSFY1b1djb0Zsd0tidjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJp6cionFruwDFQIoAkMzGAt2dHNfcHJldmlldxwXQFgqn752yLQYIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BzIyMzc4MTURb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA85Mzk0ODE3MDExMjk5MDQSb2VtX3ZpZGVvX2Fzc2V0X2lkDzM4NDUxMTQwNzQ1NjM4NxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQQMTA4MjcxODk4NjI1ODE5MRxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDM3NDE1ODYxMDk0OTY1NTIOdnRzX3JlcXVlc3RfaWQAJQIcACW%2BARsHiAFzBDUzMTkCY2QKMjAyNC0wMS0xMgNyY2IHMjIzNzgwMANhcHAFVmlkZW8CY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBjk2LjY0MgJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AfCchkrvjXeS0v7HceZrEPZHh_dCPh4KeQM8lDhiQKJg9Q&oe=662022C6&_nc_sid=1d576d&_nc_rid=940823434717697&_nc_store_type=1&dl=1"
    },
    {
      "quality": "360p (SD)",
      "url": "https://video-ord5-2.xx.fbcdn.net/v/t42.1790-2/419062132_3534798126761848_8448807795919179591_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjQ3NywicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjkzOTQ4MTcwMTEyOTkwNH0%3D&_nc_ohc=vI5kNS33k4QAb7dhRja&_nc_oc=AdhM3an5TpN_9b06ZljCno7EzpBpdkcMW1PYu-w-jJ0SmAFvqb4g65uuk1MiI0Y-C3E&rl=477&vabr=265&_nc_ht=video-ord5-2.xx&oh=00_AfASd5iHTKzDIRW_MQQZSqnL4qpbYVHV05PMdVM754yrAA&oe=662425C6&dl=1"
    }
  ];
}
```
## Example (TikTok)
```js
const tik = require('rahad-media-downloader');

const tiktokUrl = 'https://vt.tiktok.com/ZSFtDDGwa/';

async function main() {
  try {
    const result = await tik.rahadtikdl(tiktokUrl);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```
## Output Example (tikTok)
```
{
"Author": "Mohammad Rahad",
"message": "any problem please contact me",
"Facebook": "https://www.facebook.com/md.rahad.hosain18"
};
{
  "msg": "success",
  "processed_time": 0.3334,
  "title": "Instagram...👉wasik_ariyan_02👈 Fb Page..or..Yt...👉Wasik Ariyan👈 #wasik #ariyan #farhan #blackdiamond #wasikariyan143 #wasik_ariyan_02 #wasik_farhan_02 @TikTok ",
  "play_count": 708968,
  "react_count": 120845,
  "comment_count": 4200,
  "share_count": 4851,
  "noWatermarkMp4": "https://www.tikwm.com//video/media/play/7357996326723915009.mp4",
  "watermarkMp4": "https://www.tikwm.com//video/media/wmplay/7357996326723915009.mp4",
  "musicInfo": {
    "title": "original sound - wasik_ariyan_02",
    "music": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7357996342344403728.mp3",
    "author": "😻“….Wʌsɩĸ Aʀɩƴʌŋ....”😻",
    "original": true,
    "duration": 14,
    "album": ""
  },
  "region": "BD",
  "download_count": 4177,
  "create_time": 1713167031,
  "avatar": "https://www.tikwm.com//video/avatar/7357996326723915009.jpeg",
  "cover": "https://www.tikwm.com//video/cover/7357996326723915009.webp",

}
```
## Example (Instagram)
```js
const insta = require('rahad-media-downloader');

const instaUrl = 'https://www.instagram.com/reel/C5xU8OoRwdd/?igsh=MTM1MzF0M2szMTEwdg==';

async function main() {
  try {
    const result = await insta.rahadinsta(instaUrl);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();

```
## Output Example (Instagram)
```
{
  "metadata": {
    "Author": "Mohammad Rahad",
    "message": "any problem please contact me",
    "Facebook": "https://www.facebook.com/md.rahad.hosain18"
  },
  "data": {
    "status": true,
    "thumbnail_src": "https://scontent.cdninstagram.com/v/t51.29350-15/438814136_442801938217287_2625241697495574028_n.jpg?stp=c0.210.540.540a_dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1w2H60hJlCMAb7BuDfz&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBdUx9h1kmGx3GTSbyAtuplDNqhkgFOrA83AlN74l2sYQ&oe=6622D000&_nc_sid=10d13b",
    "display_url": "https://scontent.cdninstagram.com/v/t51.29350-15/438814136_442801938217287_2625241697495574028_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1w2H60hJlCMAb7BuDfz&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfC9ZffFXwLhRvUw-QHr_V1acpWWRdJdhqvIUQKTkG4Fzw&oe=6622D000&_nc_sid=10d13b",
    "display_resources": [
      {
        "src": "https://scontent.cdninstagram.com/v/t51.29350-15/438814136_442801938217287_2625241697495574028_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkci5mMjkzNTAifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1w2H60hJlCMAb7BuDfz&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDO39Ishu2v1tWxwX4PO6amYSzoeqfY3cPttiuaYJ_K3w&oe=6626C480&_nc_sid=10d13b",
        "config_width": 640,
        "config_height": 1137
      },
      {
        "src": "https://scontent.cdninstagram.com/v/t51.29350-15/438814136_442801938217287_2625241697495574028_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkci5mMjkzNTAifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1w2H60hJlCMAb7BuDfz&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDO39Ishu2v1tWxwX4PO6amYSzoeqfY3cPttiuaYJ_K3w&oe=6626C480&_nc_sid=10d13b",
        "config_width": 750,
        "config_height": 1333
      },
      {
        "src": "https://scontent.cdninstagram.com/v/t51.29350-15/438814136_442801938217287_2625241697495574028_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkci5mMjkzNTAifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1w2H60hJlCMAb7BuDfz&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDO39Ishu2v1tWxwX4PO6amYSzoeqfY3cPttiuaYJ_K3w&oe=6626C480&_nc_sid=10d13b",
        "config_width": 1080,
        "config_height": 1920
      }
    ],
    "has_audio": true,
    "video_url": "https://scontent.cdninstagram.com/v/t50.2886-16/438686059_7653826204638916_8450889029199254472_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=V3x2kpUv6w4Ab4QEnDH&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCLftpLXtz2_nARi_xBkVEdgL3AcBy4I1jCC2dlEeBMKw&oe=6622A9A5&_nc_sid=10d13b",
    "video_view_count": 19370,
    "product_type": "clips",
    "title": "",
    "video_duration": 4.783,
    "clips_music_attribution_info": {
      "artist_name": "riya_maity1553",
      "song_name": "Original audio",
      "uses_original_audio": true,
      "should_mute_audio": false,
      "should_mute_audio_reason": "",
      "audio_id": "7340490632739267"
    },
    "is_video": true,
    "owner": {
      "id": "52136742599",
      "username": "sathi.das_",
      "is_verified": false,
      "profile_pic_url": "https://scontent.cdninstagram.com/v/t51.2885-19/434722099_953669686124465_6791372127361850309_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=6bQ8-3RPQ5EAb5VrfTi&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBLPcYygq7YhoTwAcUKWX4cUH4hQOghQZLW38bjXA600g&oe=6626B5F0&_nc_sid=10d13b",
      "blocked_by_viewer": false,
      "restricted_by_viewer": null,
      "followed_by_viewer": false,
      "full_name": "⬳҉≛⃝অবুজ বালিকা࿐🧿",
      "has_blocked_viewer": false,
      "is_embeds_disabled": false,
      "is_private": false,
      "is_unpublished": false,
      "requested_by_viewer": false,
      "pass_tiering_recommendation": true,
      "edge_owner_to_timeline_media": {
        "count": 81
      },
      "edge_followed_by": {
        "count": 212586
      }
    },
    "edge_media_to_caption": {
      "edges": [
        {
          "node": {
            "created_at": "1713329409",
            "text": "বলো দেখি💋",
            "id": "18062377975536785"
          }
        }
      ]
    },
    "edge_media_to_comment": {
      "count": 197,
      "page_info": {
        "has_next_page": true,
        "end_cursor": ""
      },
      "edges": []
    },
    "edge_media_preview_like": {
      "count": 2567,
      "edges": []
    }
  }
}
```
# Installation

## You can install `rahad-media-downloader` using npm:

```bash
npm install rahad-media-downloader
```

------

## coming Soon

This package is under development, and many exciting features are planned for future releases. Stay tuned for updates and enhancements!

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. If you want to contact me, check my [GitHub profile](https://github.com/MR-RAHAD-511).

Copyright © 2024 Mohammad Rahad