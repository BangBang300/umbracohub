const UMB_PROJECT_ALIAS = 'umbracohubapp';

const fetcher = async (endpoint) => {
    const result = await fetch(`https://cdn.umbraco.io/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'umb-project-alias': UMB_PROJECT_ALIAS,
            'Accept-Language': 'en-US'
        }
    });

    return await result.json();
};

export async function getEventsOverviewPage() {
    const result = await fetcher(`content`);
    const root = result._embedded.content[0];
    const artists = await getAllEvents();

    return {
        content: {
            title: root.title,
            text: root.text
        },
        events
    };
}

export async function getAllEvents() {
    const result = await fetcher(`content/type?contentType=event`);
    const content = result._embedded.content;

    return content.map((artist) => ({
        id: event._id,
        url: event._url,
        title: event.name,
        image: event.image,
        imageCredits: event.imageCredits
    }));
}

export async function getEventsByUrl(url) {
    const content = await fetcher(`content/url?url=${url}`);

    return {
        title: content.name,
        biography: content.biography,
        image: content.image,
        imageCredits: content.imageCredits
    };
}