const localStorageKey = utf8_to_b64(process.env.APP_LOCAL_STORAGE_KEY ?? 'key');

type Value = {
    [item: string]: {} | string | null
}

type Storage = {
    [key: string]: Value
}

export const useLocalStorage = () => {
    return {set: setToLS, get: getFromLS}
}

const setToLS = (key: string, value: Value) => {
    let stored = b64_to_utf8(window.localStorage.getItem(localStorageKey));
    let obj: Storage = {};
    if (stored) {
        obj = JSON.parse(stored);
    }
    obj[key] = value;
    window.localStorage.setItem(localStorageKey, utf8_to_b64(JSON.stringify(obj)));
}

const getFromLS = (key: string) => {
    const value = b64_to_utf8(window.localStorage.getItem(localStorageKey));
    let obj: Storage = {};
    if (value) {
        obj = JSON.parse(value);
        if (obj) {
            return obj[key]
        }
    }
    return obj;
}

function utf8_to_b64( str: string ): string {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str: string | null ): string {
    return str ? decodeURIComponent(escape(window.atob( str ))) : '';
}
