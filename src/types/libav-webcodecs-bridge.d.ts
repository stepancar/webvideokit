import { LibAV, Stream } from './libav.d.ts';

interface LibAVWebCodecsBridge {
    videoStreamToConfig: (libav: LibAV, stream: Stream) => Promise<any>;
    packetToEncodedVideoChunk: (packet: any, stream: Stream) => any;
    configToVideoStream: (libav: LibAV, config: any) => Promise<any>;
    encodedVideoChunkToPacket: (libav: LibAV, chunk: any, metadata: any, stream: any, index: number) => Promise<any>;
    audioStreamToConfig: (libav: LibAV, stream: Stream) => Promise<any>;
    packetToEncodedAudioChunk: (packet: any, stream: Stream) => any;
    configToAudioStream: (libav: LibAV, config: any) => Promise<any>;
    encodedAudioChunkToPacket: (libav: LibAV, chunk: any, metadata: any, stream: any, index: number) => Promise<any>;
}

declare global {
    const LibAVWebCodecsBridge: LibAVWebCodecsBridge;
}