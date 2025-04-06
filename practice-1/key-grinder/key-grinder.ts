import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();


const target = "Rodi";
while (true) {
  const randomKeypair = Keypair.generate();
  const pubKeyLower = randomKeypair.publicKey.toBase58().toLowerCase()

  if (pubKeyLower.startsWith(target.toLowerCase())) {
    console.log(`Match found: ${randomKeypair.publicKey.toBase58()}, ${randomKeypair.secretKey}`);
    break; 
  } 
}