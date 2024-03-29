"use client";
import {
  MilestoneUpdateRequest,
  UserData,
  UserInfoResponse,
  UserInfosResponse,
  UserInfoUpdateRequest,
} from "../../proto/typescript/pb_out/main";
import useApiPBClient from "@/hooks/useApiPBClient";

const useFetchUser = () => {
  const client = useApiPBClient();

  const me = async (): Promise<UserInfoResponse> => {
    return await client.get(`/api/v1/user/info/me`).then((resp) => {
      if (resp.unauthorized) {
        throw new Error("unauthorized");
      }
      if (resp.error) {
        throw new Error(resp.error);
      }
      return UserInfoResponse.fromBinary(resp.data);
    });
  };

  const get = async (userId: string): Promise<UserInfoResponse> => {
    return await client.get(`/api/v1/user/info/${userId}`).then((resp) => {
      if (resp.unauthorized) {
        throw new Error("unauthorized");
      }
      if (resp.error) {
        throw new Error(resp.error);
      }
      return UserInfoResponse.fromBinary(resp.data);
    });
  };

  const list = async (): Promise<UserInfosResponse> => {
    return await client.get("/api/v1/user/infos").then((resp) => {
      if (resp.unauthorized) {
        throw new Error("unauthorized");
      }
      if (resp.error) {
        throw new Error(resp.error);
      }
      return UserInfosResponse.fromBinary(resp.data);
    });
  };

  const update = async (newUser: UserData): Promise<UserInfoResponse> => {
    const req = UserInfoUpdateRequest.create({
      userData: newUser,
    });
    return await client
      .put(
        `/api/v1/user/${newUser.userId}`,
        UserInfoUpdateRequest.toBinary(req),
      )
      .then((resp) => {
        if (resp.unauthorized) {
          throw new Error("unauthorized");
        }
        if (resp.error) {
          throw new Error(resp.error);
        }
        return UserInfoResponse.fromBinary(resp.data);
      });
  };

  const iconUpload = async (userId: string, file: File) => {
    return await client.imageUpload(userId, file);
  };

  return { me, get, list, update };
};

export default useFetchUser;
