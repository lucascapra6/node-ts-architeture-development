import {createClient, RedisClientType, RedisDefaultModules, RedisFunctions, RedisModules, RedisScripts} from "redis";
type RedisSet = {
    key: any,
    value: any,
    timeType: any,
    time: any
}

class RedisService {
    private client: RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>;
    constructor() {
        this.client = createClient();
    }

    async set({ key, value, timeType, time }: RedisSet) {
        await this.client.connect();
        await this.client.set(key, value, timeType, time);
        await this.client.disconnect();
    }

    async get(key: any) {
        await this.client.connect();
        const result = await this.client.get(key);
        await this.client.disconnect();
        return result;
    }
}

export default new RedisService();
