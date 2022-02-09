import axios from "axios";
import { v4 } from "uuid";

async function verifiyDetails(user) {
  if (!user) {
    throw { message: "data hamna" };
  }
  if (!user.nickname) {
    throw { message: "weka jina lako" };
  }
  if (!user.maduara) {
    throw { message: "weka duara aliepo" };
  }
  if (!user.id) {
    throw { message: "weka barua pepe" };
  }
  if (!user.picture) {
    throw { message: "weka picha" };
  }
  if (!user.description) {
    throw { message: "weka maelezo" };
  }
  if (!user.payment) {
    throw { message: "weka kiasi cha kulipa" };
  }
}

export async function register(user) {
  try {
    await verifiyDetails(user);
    const identity = (
      await axios.get(
        "https://maduara-faas.bfast.fahamutech.com/account/identity"
      )
    ).data;
    user.priv = identity.priv;
    user.pub = identity.pub;
    user.priv.kid = v4();
    user.pub.kid = v4();
    console.log(user);
  } catch (e) {
    alert(e.message);
  }
}
