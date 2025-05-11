import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Cookie Policy | Pixel Edu",
  description: "Cookie Policy for Pixel Edu",
}

export default function CookiesPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center space-y-6 mb-12">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Legal</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">Cookie Policy</h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2>1. Introduction</h2>
        <p>
          This Cookie Policy explains how Pixel Edu ("we", "us", or "our") uses cookies and similar technologies to
          recognize you when you visit our website. It explains what these technologies are and why we use them, as well
          as your rights to control our use of them.
        </p>

        <h2>2. What Are Cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
          as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, Pixel Edu) are called "first-party cookies". Cookies set by
          parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party
          features or functionality to be provided on or through the website (e.g., advertising, interactive content,
          and analytics).
        </p>

        <h2>3. Why Do We Use Cookies?</h2>
        <p>
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical
          reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary"
          cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience
          on our website. Third parties serve cookies through our website for advertising, analytics, and other
          purposes.
        </p>

        <h2>4. Types of Cookies We Use</h2>
        <p>
          The specific types of first and third-party cookies served through our website and the purposes they perform
          include:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services
            available through our website and to use some of its features, such as access to secure areas.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies collect information about how visitors use our website,
            for instance which pages visitors go to most often. We use this information to improve our website.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such
            as your username, language, or the region you are in) and provide enhanced, more personal features.
          </li>
          <li>
            <strong>Targeting Cookies:</strong> These cookies are used to make advertising messages more relevant to
            you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are
            properly displayed, and in some cases selecting advertisements that are based on your interests.
          </li>
        </ul>

        <h2>5. How Can You Control Cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by
          clicking on the appropriate opt-out links provided in the cookie banner on our website.
        </p>
        <p>
          You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
          cookies, you may still use our website though your access to some functionality and areas of our website may
          be restricted.
        </p>

        <h2>6. How Often Will We Update This Cookie Policy?</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we
          use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy
          regularly to stay informed about our use of cookies and related technologies.
        </p>
        <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

        <h2>7. Where Can You Get Further Information?</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at
          hello@pixeledu.io.
        </p>
      </div>
    </div>
  )
}
