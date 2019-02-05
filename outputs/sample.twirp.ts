// Generated by protoc-gen-twirp_typescript. DO NOT EDIT
import {sample} from './sample.pb';
import {createTwirpAdapter} from 'pbjs-twirp';
import Axios from 'axios';

const getServiceMethodName = (fn: any): string => {
	if (fn === sample.EchoBase.prototype.echoBase) {
		return 'EchoBase';
    }
	if (fn === sample.EchoRepeated.prototype.echoRepeated) {
		return 'EchoRepeated';
    }

    throw new Error('Unknown Method');
};


export const EchoBasePathPrefix = '/twirp/sample.EchoBase/';

export const createEchoBase = (baseURL: string): sample.EchoBase => {
	const axios = Axios.create({
        baseURL: baseURL + EchoBasePathPrefix,
        headers: {
          Accept: 'application/protobuf'
        }
    });

    return sample.EchoBase.create(createTwirpAdapter(axios, getServiceMethodName));
};
export const EchoRepeatedPathPrefix = '/twirp/sample.EchoRepeated/';

export const createEchoRepeated = (baseURL: string): sample.EchoRepeated => {
	const axios = Axios.create({
        baseURL: baseURL + EchoRepeatedPathPrefix,
        headers: {
          Accept: 'application/protobuf'
        }
    });

    return sample.EchoRepeated.create(createTwirpAdapter(axios, getServiceMethodName));
};
