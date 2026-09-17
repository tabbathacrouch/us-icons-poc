import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Per-icon subpath imports — the form a real app should use, so only the icons
// referenced here end up in the bundle. These files are CommonJS, so this also
// exercises the bundler's named-export interop.
import { faDistrictOfColumbia } from "united-states-and-territories-solid-svg-icons/faDistrictOfColumbia";
import { faHawaii } from "united-states-and-territories-solid-svg-icons/faHawaii";
import { faTexas } from "united-states-and-territories-solid-svg-icons/faTexas";
import { StateIcon } from "@/components/state-icon/state-icon";
import { findStateIcon } from "@/lib/icon-lookup";
import { Code, Header, Lede, Main, NavLink, Title } from "../page.styles";
import { Columns, IconRow, Panel, PanelNote, PanelTitle } from "./page.styles";

const SAMPLES = [
  { icon: faTexas, label: "Texas" },
  { icon: faHawaii, label: "Hawaii" },
  { icon: faDistrictOfColumbia, label: "District of Columbia" },
];

export default function ComparePage() {
  // String lookup through Font Awesome's library, for code that only knows the
  // name at runtime. Returns the same definition as the import above.
  const lookedUp = findStateIcon("texas");

  return (
    <Main>
      <Header>
        <Title>Two ways to render the same icon</Title>
        <Lede>
          Both columns draw the identical path data. The difference is who turns
          it into an <Code>&lt;svg&gt;</Code> — Font Awesome&apos;s component, or
          twelve lines of your own.
        </Lede>
        <NavLink href="/">← Back to the gallery</NavLink>
      </Header>

      <Columns>
        <Panel>
          <PanelTitle>&lt;FontAwesomeIcon&gt;</PanelTitle>
          <PanelNote>
            Two runtime dependencies. Brings FA&apos;s sizing, spin, rotate and
            stacking props, and produces the same markup as every other Font
            Awesome icon in the app. Name it with <Code>aria-label</Code> — in
            Font Awesome 7 the <Code>title</Code> prop is deprecated and leaves
            the icon <Code>aria-hidden</Code>.
          </PanelNote>
          <IconRow>
            {SAMPLES.map((sample) => (
              // aria-label, NOT title: Font Awesome 7 deprecated the title prop
              // and treats icons as decorative by default, so `title` renders
              // aria-hidden="true" and no accessible name at all.
              <FontAwesomeIcon
                key={sample.label}
                icon={sample.icon}
                aria-label={sample.label}
              />
            ))}
          </IconRow>
        </Panel>

        <Panel>
          <PanelTitle>&lt;StateIcon&gt;</PanelTitle>
          <PanelNote>
            No dependencies and no hooks, so it renders on the server and ships
            zero client JavaScript. You write any extras yourself.
          </PanelNote>
          <IconRow>
            {SAMPLES.map((sample) => (
              <StateIcon
                key={sample.label}
                icon={sample.icon}
                title={sample.label}
              />
            ))}
          </IconRow>
        </Panel>
      </Columns>

      <Panel>
        <PanelTitle>Runtime lookup by name</PanelTitle>
        <PanelNote>
          <Code>findIconDefinition({`{ prefix: 'usat', iconName: 'texas' }`})</Code>{" "}
          after <Code>library.add(usat)</Code>. Both strings need a TypeScript
          cast — Font Awesome&apos;s <Code>IconPrefix</Code> and{" "}
          <Code>IconName</Code> are closed unions that no third-party pack can
          extend.
        </PanelNote>
        <IconRow>
          {lookedUp ? (
            <StateIcon icon={lookedUp} title="Texas, found by name" />
          ) : (
            <span>Lookup failed</span>
          )}
        </IconRow>
      </Panel>
    </Main>
  );
}
