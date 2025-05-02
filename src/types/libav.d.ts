import { LibAVWrapper, LibAV, Stream } from '@libav.js/variant-webcodecs';

declare global {
    interface Window {
        LibAV: LibAVWrapper;
    }

    const LibAV: LibAVWrapper;
}

export type { LibAV, Stream };