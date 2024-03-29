// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "main.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message UserData
 */
export interface UserData {
    /**
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: string firstname = 3;
     */
    firstname: string;
    /**
     * @generated from protobuf field: string lastname = 4;
     */
    lastname: string;
    /**
     * @generated from protobuf field: string firstname_kana = 5;
     */
    firstnameKana: string;
    /**
     * @generated from protobuf field: string lastname_kana = 6;
     */
    lastnameKana: string;
    /**
     * @generated from protobuf field: string status_message = 7;
     */
    statusMessage: string;
    /**
     * @generated from protobuf field: repeated Tag tag = 8;
     */
    tag: Tag[];
    /**
     * @generated from protobuf field: optional string icon_url = 9;
     */
    iconUrl?: string; // GCS内のファイル名
}
/**
 * @generated from protobuf message Tag
 */
export interface Tag {
    /**
     * @generated from protobuf field: string tag_id = 1;
     */
    tagId: string;
    /**
     * @generated from protobuf field: string tag_name = 2;
     */
    tagName: string;
}
/**
 * @generated from protobuf message Milestone
 */
export interface Milestone {
    /**
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from protobuf field: string milestone_id = 2;
     */
    milestoneId: string;
    /**
     * @generated from protobuf field: string title = 3;
     */
    title: string;
    /**
     * @generated from protobuf field: string content = 4;
     */
    content: string;
    /**
     * @generated from protobuf field: optional string image_url = 5;
     */
    imageUrl?: string; // GCS内のファイル名
    /**
     * @generated from protobuf field: string begin_date = 6;
     */
    beginDate: string; //  RFC3339
    /**
     * @generated from protobuf field: string finish_date = 7;
     */
    finishDate: string; // RFC3339
}
/**
 * @generated from protobuf message UserInfoUpdateRequest
 */
export interface UserInfoUpdateRequest {
    /**
     * @generated from protobuf field: UserData user_data = 1;
     */
    userData?: UserData;
}
/**
 * @generated from protobuf message UserInfoResponse
 */
export interface UserInfoResponse {
    /**
     * @generated from protobuf field: UserData user_data = 1;
     */
    userData?: UserData;
    /**
     * @generated from protobuf field: repeated Milestone milestones = 2;
     */
    milestones: Milestone[];
}
/**
 * @generated from protobuf message UserInfosResponse
 */
export interface UserInfosResponse {
    /**
     * @generated from protobuf field: repeated UserInfoResponse user_info_responses = 1;
     */
    userInfoResponses: UserInfoResponse[];
}
/**
 * @generated from protobuf message GetMeResponse
 */
export interface GetMeResponse {
    /**
     * @generated from protobuf field: UserData user_data = 1;
     */
    userData?: UserData;
}
/**
 * @generated from protobuf message MilestoneCreateRequest
 */
export interface MilestoneCreateRequest {
    /**
     * @generated from protobuf field: Milestone milestone = 1;
     */
    milestone?: Milestone; // milestone_id should be empty.
}
/**
 * @generated from protobuf message MilestoneCreateResponse
 */
export interface MilestoneCreateResponse {
    /**
     * @generated from protobuf field: Milestone milestone = 1;
     */
    milestone?: Milestone;
}
/**
 * @generated from protobuf message MilestoneUpdateRequest
 */
export interface MilestoneUpdateRequest {
    /**
     * @generated from protobuf field: Milestone milestone = 1;
     */
    milestone?: Milestone; // user_id and milestone_id should be valid.
}
// @generated message type with reflection information, may provide speed optimized methods
class UserData$Type extends MessageType<UserData> {
    constructor() {
        super("UserData", [
            { no: 1, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "firstname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "lastname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "firstname_kana", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "lastname_kana", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "status_message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "tag", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Tag },
            { no: 9, name: "icon_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UserData>): UserData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.userId = "";
        message.username = "";
        message.firstname = "";
        message.lastname = "";
        message.firstnameKana = "";
        message.lastnameKana = "";
        message.statusMessage = "";
        message.tag = [];
        if (value !== undefined)
            reflectionMergePartial<UserData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserData): UserData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user_id */ 1:
                    message.userId = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string firstname */ 3:
                    message.firstname = reader.string();
                    break;
                case /* string lastname */ 4:
                    message.lastname = reader.string();
                    break;
                case /* string firstname_kana */ 5:
                    message.firstnameKana = reader.string();
                    break;
                case /* string lastname_kana */ 6:
                    message.lastnameKana = reader.string();
                    break;
                case /* string status_message */ 7:
                    message.statusMessage = reader.string();
                    break;
                case /* repeated Tag tag */ 8:
                    message.tag.push(Tag.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string icon_url */ 9:
                    message.iconUrl = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string user_id = 1; */
        if (message.userId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userId);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string firstname = 3; */
        if (message.firstname !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.firstname);
        /* string lastname = 4; */
        if (message.lastname !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.lastname);
        /* string firstname_kana = 5; */
        if (message.firstnameKana !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.firstnameKana);
        /* string lastname_kana = 6; */
        if (message.lastnameKana !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.lastnameKana);
        /* string status_message = 7; */
        if (message.statusMessage !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.statusMessage);
        /* repeated Tag tag = 8; */
        for (let i = 0; i < message.tag.length; i++)
            Tag.internalBinaryWrite(message.tag[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* optional string icon_url = 9; */
        if (message.iconUrl !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.iconUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UserData
 */
export const UserData = new UserData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Tag$Type extends MessageType<Tag> {
    constructor() {
        super("Tag", [
            { no: 1, name: "tag_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "tag_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Tag>): Tag {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.tagId = "";
        message.tagName = "";
        if (value !== undefined)
            reflectionMergePartial<Tag>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Tag): Tag {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string tag_id */ 1:
                    message.tagId = reader.string();
                    break;
                case /* string tag_name */ 2:
                    message.tagName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Tag, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string tag_id = 1; */
        if (message.tagId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.tagId);
        /* string tag_name = 2; */
        if (message.tagName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.tagName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Tag
 */
export const Tag = new Tag$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Milestone$Type extends MessageType<Milestone> {
    constructor() {
        super("Milestone", [
            { no: 1, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "milestone_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "image_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "begin_date", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "finish_date", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Milestone>): Milestone {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.userId = "";
        message.milestoneId = "";
        message.title = "";
        message.content = "";
        message.beginDate = "";
        message.finishDate = "";
        if (value !== undefined)
            reflectionMergePartial<Milestone>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Milestone): Milestone {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user_id */ 1:
                    message.userId = reader.string();
                    break;
                case /* string milestone_id */ 2:
                    message.milestoneId = reader.string();
                    break;
                case /* string title */ 3:
                    message.title = reader.string();
                    break;
                case /* string content */ 4:
                    message.content = reader.string();
                    break;
                case /* optional string image_url */ 5:
                    message.imageUrl = reader.string();
                    break;
                case /* string begin_date */ 6:
                    message.beginDate = reader.string();
                    break;
                case /* string finish_date */ 7:
                    message.finishDate = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Milestone, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string user_id = 1; */
        if (message.userId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userId);
        /* string milestone_id = 2; */
        if (message.milestoneId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.milestoneId);
        /* string title = 3; */
        if (message.title !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.title);
        /* string content = 4; */
        if (message.content !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.content);
        /* optional string image_url = 5; */
        if (message.imageUrl !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.imageUrl);
        /* string begin_date = 6; */
        if (message.beginDate !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.beginDate);
        /* string finish_date = 7; */
        if (message.finishDate !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.finishDate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Milestone
 */
export const Milestone = new Milestone$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserInfoUpdateRequest$Type extends MessageType<UserInfoUpdateRequest> {
    constructor() {
        super("UserInfoUpdateRequest", [
            { no: 1, name: "user_data", kind: "message", T: () => UserData }
        ]);
    }
    create(value?: PartialMessage<UserInfoUpdateRequest>): UserInfoUpdateRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<UserInfoUpdateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserInfoUpdateRequest): UserInfoUpdateRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* UserData user_data */ 1:
                    message.userData = UserData.internalBinaryRead(reader, reader.uint32(), options, message.userData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserInfoUpdateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* UserData user_data = 1; */
        if (message.userData)
            UserData.internalBinaryWrite(message.userData, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UserInfoUpdateRequest
 */
export const UserInfoUpdateRequest = new UserInfoUpdateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserInfoResponse$Type extends MessageType<UserInfoResponse> {
    constructor() {
        super("UserInfoResponse", [
            { no: 1, name: "user_data", kind: "message", T: () => UserData },
            { no: 2, name: "milestones", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Milestone }
        ]);
    }
    create(value?: PartialMessage<UserInfoResponse>): UserInfoResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.milestones = [];
        if (value !== undefined)
            reflectionMergePartial<UserInfoResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserInfoResponse): UserInfoResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* UserData user_data */ 1:
                    message.userData = UserData.internalBinaryRead(reader, reader.uint32(), options, message.userData);
                    break;
                case /* repeated Milestone milestones */ 2:
                    message.milestones.push(Milestone.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* UserData user_data = 1; */
        if (message.userData)
            UserData.internalBinaryWrite(message.userData, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated Milestone milestones = 2; */
        for (let i = 0; i < message.milestones.length; i++)
            Milestone.internalBinaryWrite(message.milestones[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UserInfoResponse
 */
export const UserInfoResponse = new UserInfoResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserInfosResponse$Type extends MessageType<UserInfosResponse> {
    constructor() {
        super("UserInfosResponse", [
            { no: 1, name: "user_info_responses", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UserInfoResponse }
        ]);
    }
    create(value?: PartialMessage<UserInfosResponse>): UserInfosResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.userInfoResponses = [];
        if (value !== undefined)
            reflectionMergePartial<UserInfosResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserInfosResponse): UserInfosResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated UserInfoResponse user_info_responses */ 1:
                    message.userInfoResponses.push(UserInfoResponse.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserInfosResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated UserInfoResponse user_info_responses = 1; */
        for (let i = 0; i < message.userInfoResponses.length; i++)
            UserInfoResponse.internalBinaryWrite(message.userInfoResponses[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UserInfosResponse
 */
export const UserInfosResponse = new UserInfosResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMeResponse$Type extends MessageType<GetMeResponse> {
    constructor() {
        super("GetMeResponse", [
            { no: 1, name: "user_data", kind: "message", T: () => UserData }
        ]);
    }
    create(value?: PartialMessage<GetMeResponse>): GetMeResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetMeResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMeResponse): GetMeResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* UserData user_data */ 1:
                    message.userData = UserData.internalBinaryRead(reader, reader.uint32(), options, message.userData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* UserData user_data = 1; */
        if (message.userData)
            UserData.internalBinaryWrite(message.userData, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetMeResponse
 */
export const GetMeResponse = new GetMeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MilestoneCreateRequest$Type extends MessageType<MilestoneCreateRequest> {
    constructor() {
        super("MilestoneCreateRequest", [
            { no: 1, name: "milestone", kind: "message", T: () => Milestone }
        ]);
    }
    create(value?: PartialMessage<MilestoneCreateRequest>): MilestoneCreateRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<MilestoneCreateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MilestoneCreateRequest): MilestoneCreateRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Milestone milestone */ 1:
                    message.milestone = Milestone.internalBinaryRead(reader, reader.uint32(), options, message.milestone);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MilestoneCreateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Milestone milestone = 1; */
        if (message.milestone)
            Milestone.internalBinaryWrite(message.milestone, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MilestoneCreateRequest
 */
export const MilestoneCreateRequest = new MilestoneCreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MilestoneCreateResponse$Type extends MessageType<MilestoneCreateResponse> {
    constructor() {
        super("MilestoneCreateResponse", [
            { no: 1, name: "milestone", kind: "message", T: () => Milestone }
        ]);
    }
    create(value?: PartialMessage<MilestoneCreateResponse>): MilestoneCreateResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<MilestoneCreateResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MilestoneCreateResponse): MilestoneCreateResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Milestone milestone */ 1:
                    message.milestone = Milestone.internalBinaryRead(reader, reader.uint32(), options, message.milestone);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MilestoneCreateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Milestone milestone = 1; */
        if (message.milestone)
            Milestone.internalBinaryWrite(message.milestone, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MilestoneCreateResponse
 */
export const MilestoneCreateResponse = new MilestoneCreateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MilestoneUpdateRequest$Type extends MessageType<MilestoneUpdateRequest> {
    constructor() {
        super("MilestoneUpdateRequest", [
            { no: 1, name: "milestone", kind: "message", T: () => Milestone }
        ]);
    }
    create(value?: PartialMessage<MilestoneUpdateRequest>): MilestoneUpdateRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<MilestoneUpdateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MilestoneUpdateRequest): MilestoneUpdateRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Milestone milestone */ 1:
                    message.milestone = Milestone.internalBinaryRead(reader, reader.uint32(), options, message.milestone);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MilestoneUpdateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Milestone milestone = 1; */
        if (message.milestone)
            Milestone.internalBinaryWrite(message.milestone, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MilestoneUpdateRequest
 */
export const MilestoneUpdateRequest = new MilestoneUpdateRequest$Type();
