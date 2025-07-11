import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  sub: string; // userId as string
  email?: string; // email as string
  name?: string; // name as string
  exp?: number; // expiration time as number
  iat?: number; // issued at time as number
};

export async function getUserIdFromToken(): Promise<string | null> {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    router.push("/");
    console.log("Token is null, redirecting to Login");
    return null;
  }
  if (token === "null") {
    router.push("/");
    console.log("Token is null, redirecting to Login");
    return null;
  }
  try {
    const decoded: DecodedToken = jwtDecode(token);
    console.log("Decoded JWT:", decoded);
    return decoded.sub;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
}

export async function getEmailFromToken(): Promise<string | null> {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    router.push("/");
    console.log("Token is null, redirecting to Login");
    return null;
  }
  if (token === "null") {
    router.push("/");
    console.log("Token is null, redirecting to Login");
    return null;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded.email || null;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
}

export async function getNameFromToken(): Promise<string | null> {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    router.push("/(auth)/login");
    console.log("Token is null, redirecting to Login");
    return null;
  }
  if (token === "null") {
    router.push("/(auth)/login");
    console.log("Token is null, redirecting to Login");
    return null;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded.name || null;
  } catch (error) {
    console.error("Invalid JWT:", error);
    console.log("Token is invalid, redirecting to Login");
    return null;
  }
}
