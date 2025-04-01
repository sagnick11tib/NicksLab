import { NextResponse } from "next/server";
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers],
  });
  
client.login(process.env.DISCORD_BOT_TOKEN);

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) return NextResponse.json({ error: "User ID is required" }, { status: 400 });

    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID!);

    if (!guild) return NextResponse.json({ error: "Bot is not in the server"}, { status: 500 });

    const member = await guild.members.fetch(userId).catch(() => null);

    if (!member) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({
        username: member.user.username,
        status: member.presence?.status || "offline"
    });

};
