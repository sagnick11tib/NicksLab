import {
    IconAWS,
  IconCloudflare,
  IconCSS,
  IconDigitalOcean,
  IconFirebase,
  IconFramerMotion,
  IconGit,
  IconHTML,
  IconMongoDB,
  IconNextJS,
  IconNginx,
  IconNodeJS,
  IconReactJS,
  IconRedis,
  IconRedux,
  IconTailwindcss,
  IconTypescript,
  IconVite,
  SkillIconsDocker,
} from "@/components/Icons/StackIcons";
import Marquee from "@/components/ui/Marquee";

const StacksCard = () => {
  return (
    <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
      <Marquee className="" fade pauseOnHover>
        <IconTypescript width="48" height="48" />
        <IconTailwindcss width="48" height="48" />
        <IconNextJS width="48" height="48" />
        <IconReactJS width="48" height="48" />
        <IconHTML width="48" height="48" /> 
        <IconCSS width="48" height="48" />
        <IconFramerMotion width="48" height="48" />
      </Marquee>
      <Marquee className="mt-2" reverse fade pauseOnHover>
        <SkillIconsDocker width="48" height="48" />
        <IconFirebase width="48" height="48" />
        <IconGit width="48" height="48" />
        <IconVite width="48" height="48" />
        <IconCloudflare width="48" height="48" />
        <IconNodeJS width="48" height="48" />
        <IconNginx  width="48" height="48" />
        <IconRedis width="48" height="48" />    
        <IconRedux width="48" height="48" />
        <IconMongoDB width="48" height="48" />
        <IconAWS width="48" height="48" />
        <IconDigitalOcean width="48" height="48" />
      </Marquee>
    </div>
  );
};

export default StacksCard;
