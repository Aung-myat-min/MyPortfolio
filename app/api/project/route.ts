import axios from "axios";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  unstable_noStore();
  try {
    const apiKey = process.env.API_KEY;
    const response = await axios.get(
      "https://api.github.com/users/Aung-myat-min/repos",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    const repositories = response.data.map((repo: any) => repo.name);
    const descriptions = response.data.map((repo: any) => repo.description);

    const fetchLanguagesPromises = repositories.map((projectTitle: string) =>
      axios.get(
        `https://api.github.com/repos/Aung-myat-min/${projectTitle}/languages`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      )
    );

    const languagesResponses = await Promise.all(fetchLanguagesPromises);
    const languagesData: { [key: string]: string[] } = {};

    languagesResponses.forEach((languagesResponse, index) => {
      const projectTitle = repositories[index];
      const languages = Object.keys(languagesResponse.data);
      languagesData[projectTitle] = languages;
    });

    return NextResponse.json(
      {
        repositories,
        descriptions,
        languages: languagesData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return NextResponse.error(error.message, { status: 500 });
  }
}
