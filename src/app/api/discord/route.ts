import { NextResponse } from "next/server";
import { Client, GatewayIntentBits } from "discord.js";

// const client = new Client({
//     intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences],
// });

// client.once("ready", () => {
//     console.log(`🤖 Logged in as ${client.user?.tag}`);
// });

// client.login(process.env.DISCORD_BOT_TOKEN);

export async function GET() {
    return NextResponse.json({ message: "Discord Bot Running!" });
}