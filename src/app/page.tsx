import { IconGallery } from "@/components/icon-gallery/icon-gallery";
import { getStateIcons } from "@/lib/icons";
import { Code, Header, Lede, Main, NavLink, Title } from "./page.styles";

/**
 * Server Component: the icon list is derived at build time and handed to the
 * client gallery as props. Icon definitions are plain objects (numbers, strings
 * and arrays), so they cross the server/client boundary without serialization.
 */
export default function HomePage() {
  const entries = getStateIcons();

  return (
    <Main>
      <Header>
        <Title>US State &amp; Territory Icons</Title>
        <Lede>
          All {entries.length} icons from{" "}
          <Code>united-states-and-territories-solid-svg-icons</Code>, rendered
          with <Code>&lt;FontAwesomeIcon&gt;</Code>. Resize them to see which
          silhouettes hold up — the island territories thin out below the sizes
          the package documents.
        </Lede>
        <NavLink href="/compare">
          Compare Font Awesome vs. raw SVG rendering →
        </NavLink>
      </Header>
      <IconGallery entries={entries} />
    </Main>
  );
}
