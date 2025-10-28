import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
export default function Skills() {
  const skills = [
    { category: "Languages", skillsIcons: "js,ts,java,html,css" },
    {
      category: "Frontend",
      skillsIcons: "react,nextjs,vite,redux,tailwind,bootstrap,materialui,sass",
    },
    {
      category: "Backend",
      skillsIcons: "nodejs,express,nestjs,spring,kafka,redis,nginx",
    },
    {
      category: "Database",
      skillsIcons: "mongodb,postgres,mysql,cassandra",
    },
    {
      category: "DevOps",
      skillsIcons: "docker,aws,githubactions,jenkins,terraform",
    },
    {
      category: "Tools",
      skillsIcons: "git,github,gitlab,linux,postman,notion",
    },
  ];
  return (
    <div
      id="skills"
      className="mx-auto motion-preset-fade relative my-20 h-[80vh] w-full"
    >
      <div className="w-full">
        <div>
          <h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-center">
            My Skills & Stack
          </h2>
        </div>
        <div className="mt-20">
          <Table>
            <TableHeader>
              <TableRow className="font-semibold text-xl">
                <TableHead className="w-1/4 ">Category</TableHead>
                <TableHead>Tools & Tech</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill) => (
                <TableRow className="py-5">
                  <TableCell className="font-medium">
                    {skill.category}
                  </TableCell>
                  <TableCell>
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.skillsIcons}`}
                      alt="Skill Icons"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
