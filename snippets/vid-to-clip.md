## Requirement

- findbyProps
- Has clip metadata in that file

You can add metadata by using this snippet:
```js
findByProps('getMediaEngine').getMediaEngine().updateClipMetadata("<LOCAL_FILE_PATH>","{}")
```
> `<LOCAL_FILE_PATH>`: Your local path to your file. (Eg: `C:\\Users\\bachhummus\\Downloads\\Video\\promo.mp4`)

## Snippet

```js
function openFile() {
    return new Promise((r) => {
        let t = document.createElement('input');
        (t.type = 'file'),
            (t.accept = '*'),
            (t.style.display = 'none'),
            document.body.appendChild(t),
            t.click(),
            t.addEventListener('change', () => {
                r(t.files[0]), t.remove();
            });
    });
}


function uploadFile(url, file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function (event) {
            fetch(url, {
                method: 'PUT',
                body: event.target.result,
                referrer: 'https://discord.com/',
                referrerPolicy: 'strict-origin-when-cross-origin',
                mode: 'cors',
                credentials: 'omit',
            })
            .then(response => resolve(response.ok))
            .catch(error => reject(error));
        };
		reader.readAsArrayBuffer(file);
    });
}

async function start(fn, spoiler, ctitle, remix, thumbnail, cparticipant, ccreatedate, content) {
    if (!window.findByProps) {
        console.error(
            '%c[Error] %cUncaught ReferenceError: findByProps is not defined\nhttps://discord.com/channels/603970300668805120/1085682686607249478/1085682686607249478',
            'color: red',
            '',
        );
        return;
    }

    let channelId = findByProps('getCurrentlySelectedChannelId').getCurrentlySelectedChannelId();
    let file = await openFile();
    
    let attachmentResponse = await findByProps('getAPIBaseURL').post({
        url: `/channels/${channelId}/attachments`,
        body: {
            content: content,
            files: [
                {
                    filename: fn,
                    file_size: 69,
                    id: `${Math.floor(1e3 * Math.random())}`,
                    is_clip: true,
                    is_spoiler: spoiler,
                    is_remix: remix,
                    is_thumbnail: thumbnail,
                    clip_created_at: ccreatedate,
                    clip_participant_ids: cparticipant,
                    title: ctitle
                },
            ],
        },
    }).catch((error) => error);

    if (!attachmentResponse.ok) {
        console.error(`%c[Error] %c${attachmentResponse.text}`, 'color: red', '');
        return;
    }

    let parsedAttachmentResponse = JSON.parse(attachmentResponse.text);
    let attachment = parsedAttachmentResponse.attachments[0];

    let uploadResult = await uploadFile(attachment.upload_url, file);
    
    if (!uploadResult) {
        console.error('%c[Error] %cUpload failed', 'color: red', '');
        return;
    }

    let sendMessageResult = await findByProps('getAPIBaseURL').post({
        url: `/channels/${channelId}/messages`,
        body: {
            content: content,
            attachments: [
                {
                    id: '0',
		    filesize: 69,
                    filename: fn,
                    uploaded_filename: attachment.upload_filename,
                    is_clip: true,
                    is_spoiler: spoiler,
                    is_remix: remix,
                    is_thumbnail: thumbnail,
                    clip_created_at: ccreatedate,
                    clip_participant_ids: cparticipant,
                    title: ctitle
                },
            ],
        },
    }).catch((error) => error);

    if (!sendMessageResult.ok) {
        console.error(`%c[Error] %c${sendMessageResult.text}`, 'color: red', '');
        return;
    }

    console.log('%c[bachhummus] %cSuccess', 'color: blue', '');
}

const fn = "<FILE_NAME>";
const cparticipant = ["<USER_ID"];
const ctitle = "<CLIP_TITLE>";
const spoiler = "<SPOILER_BOOL>";
const remix = "<REMIX_BOOL>";
const thumbnail = "<THUMBNAIL_BOOL>";
const ccreatedate = "<CREATION_DATE>";
const content = "<MESSAGE_CONTENT>";

start(fn, spoiler, ctitle, remix, thumbnail, cparticipant, ccreatedate, content);
```

## Option

- `<FILE_NAME>`: Specify the desired file name. (Eg: `test.mp4`)
- `<USER_ID>`: Provide any user ID to add to the clip participant list. Example:
```js
const cparticipant =  [ "624091967625625610", "669627189624307712", "1008776202191634432", "643945264868098049", "1081004946872352958"];
```
- `<CLIP_TITLE>`: Set the title of your clip. (Eg: `i forgor`)
- `<SPOILER_BOOL>`: Indicate whether to mark your clip as a spoiler attachment (Must be `true` or `false`)
- `<REMIX_BOOL>`: Specify whether to mark your clip as a [remix](https://support.discord.com/hc/en-us/articles/15145601963031) attachment. (Must be `true` or `false`)
- `<THUMBNAIL_BOOL>`: Decide whether to mark your clip as a thumbnail attachment. (Must be `true` or `false`)
> Note that setting this to true will make your clip invisible!
- `<CREATION_DATE>`: Provide the creation date in ISO 8601 timestamp format (Eg: `2024-01-30T10:43:22.637Z`)
- `<MESSAGE_CONTENT>`: Include the message you want to send with the clip.
> You can use `/n` to create a new line! (Eg: `hi everyone/nbye chat`)
