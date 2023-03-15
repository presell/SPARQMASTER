// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pa7sVod8bKytSwUDATE2VX
// Component: LA6cIoFI-nR3
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantstrXlpJoOfOW4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TRXlpJoOf-oW4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_in_use_sparq_master_app.module.css"; // plasmic-import: pa7sVod8bKytSwUDATE2VX/projectcss
import sty from "./PlasmicAnnouncementBar1440Px.module.css"; // plasmic-import: LA6cIoFI-nR3/css

import Frame9Icon from "./icons/PlasmicIcon__Frame9"; // plasmic-import: IDccrqveitDFv/icon
import Frame10Icon from "./icons/PlasmicIcon__Frame10"; // plasmic-import: rM1hMAOAoH7Rq/icon
import Frame11Icon from "./icons/PlasmicIcon__Frame11"; // plasmic-import: qAyAiqCu5eKUr/icon

export type PlasmicAnnouncementBar1440Px__VariantMembers = {};
export type PlasmicAnnouncementBar1440Px__VariantsArgs = {};
type VariantPropType = keyof PlasmicAnnouncementBar1440Px__VariantsArgs;
export const PlasmicAnnouncementBar1440Px__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAnnouncementBar1440Px__ArgsType = {};
type ArgPropType = keyof PlasmicAnnouncementBar1440Px__ArgsType;
export const PlasmicAnnouncementBar1440Px__ArgProps = new Array<ArgPropType>();

export type PlasmicAnnouncementBar1440Px__OverridesType = {
  div145?: p.Flex<"div">;
  div146?: p.Flex<"div">;
  div147?: p.Flex<"div">;
  freeShippingOnOrdersOver652?: p.Flex<"div">;
  text?: p.Flex<"div">;
  div148?: p.Flex<"div">;
  ul5?: p.Flex<"div">;
  svg11?: p.Flex<"a"> & Partial<LinkProps>;
  svg12?: p.Flex<"a"> & Partial<LinkProps>;
  svg6?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultAnnouncementBar1440PxProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAnnouncementBar1440Px__RenderFunc(props: {
  variants: PlasmicAnnouncementBar1440Px__VariantsArgs;
  args: PlasmicAnnouncementBar1440Px__ArgsType;
  overrides: PlasmicAnnouncementBar1440Px__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstrXlpJoOfOW4()
  });

  return (
    <div
      data-plasmic-name={"div145"}
      data-plasmic-override={overrides.div145}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div145
      )}
    >
      <div
        data-plasmic-name={"div146"}
        data-plasmic-override={overrides.div146}
        className={classNames(projectcss.all, sty.div146)}
      >
        <div
          data-plasmic-name={"div147"}
          data-plasmic-override={overrides.div147}
          className={classNames(projectcss.all, sty.div147)}
        >
          <div
            data-plasmic-name={"freeShippingOnOrdersOver652"}
            data-plasmic-override={overrides.freeShippingOnOrdersOver652}
            className={classNames(
              projectcss.all,
              sty.freeShippingOnOrdersOver652
            )}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"FREE SHIPPING ON ORDERS OVER $65"}
            </div>
          </div>

          <div
            data-plasmic-name={"div148"}
            data-plasmic-override={overrides.div148}
            className={classNames(projectcss.all, sty.div148)}
          >
            <div
              data-plasmic-name={"ul5"}
              data-plasmic-override={overrides.ul5}
              className={classNames(projectcss.all, sty.ul5)}
            >
              <p.PlasmicLink
                data-plasmic-name={"svg11"}
                data-plasmic-override={overrides.svg11}
                className={classNames(projectcss.all, projectcss.a, sty.svg11)}
                component={Link}
                href={"https://facebook.com/breathesparq" as const}
                platform={"nextjs"}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <Frame9Icon
                    className={classNames(projectcss.all, sty.svg___2PnMb)}
                    role={"img"}
                  />
                ) : null}
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"svg12"}
                data-plasmic-override={overrides.svg12}
                className={classNames(projectcss.all, projectcss.a, sty.svg12)}
                component={Link}
                href={"http://instagram.com/sparqlife" as const}
                platform={"nextjs"}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <Frame10Icon
                    className={classNames(projectcss.all, sty.svg__hdBeX)}
                    role={"img"}
                  />
                ) : null}
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"svg6"}
                data-plasmic-override={overrides.svg6}
                className={classNames(projectcss.all, projectcss.a, sty.svg6)}
                component={Link}
                href={"https://twitter.com/sparqlife" as const}
                platform={"nextjs"}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <Frame11Icon
                    className={classNames(projectcss.all, sty.svg__oTsq)}
                    role={"img"}
                  />
                ) : null}
              </p.PlasmicLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div145: [
    "div145",
    "div146",
    "div147",
    "freeShippingOnOrdersOver652",
    "text",
    "div148",
    "ul5",
    "svg11",
    "svg12",
    "svg6"
  ],
  div146: [
    "div146",
    "div147",
    "freeShippingOnOrdersOver652",
    "text",
    "div148",
    "ul5",
    "svg11",
    "svg12",
    "svg6"
  ],
  div147: [
    "div147",
    "freeShippingOnOrdersOver652",
    "text",
    "div148",
    "ul5",
    "svg11",
    "svg12",
    "svg6"
  ],
  freeShippingOnOrdersOver652: ["freeShippingOnOrdersOver652", "text"],
  text: ["text"],
  div148: ["div148", "ul5", "svg11", "svg12", "svg6"],
  ul5: ["ul5", "svg11", "svg12", "svg6"],
  svg11: ["svg11"],
  svg12: ["svg12"],
  svg6: ["svg6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div145: "div";
  div146: "div";
  div147: "div";
  freeShippingOnOrdersOver652: "div";
  text: "div";
  div148: "div";
  ul5: "div";
  svg11: "a";
  svg12: "a";
  svg6: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAnnouncementBar1440Px__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAnnouncementBar1440Px__VariantsArgs;
    args?: PlasmicAnnouncementBar1440Px__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAnnouncementBar1440Px__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAnnouncementBar1440Px__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAnnouncementBar1440Px__ArgProps,
          internalVariantPropNames: PlasmicAnnouncementBar1440Px__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAnnouncementBar1440Px__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div145") {
    func.displayName = "PlasmicAnnouncementBar1440Px";
  } else {
    func.displayName = `PlasmicAnnouncementBar1440Px.${nodeName}`;
  }
  return func;
}

export const PlasmicAnnouncementBar1440Px = Object.assign(
  // Top-level PlasmicAnnouncementBar1440Px renders the root element
  makeNodeComponent("div145"),
  {
    // Helper components rendering sub-elements
    div146: makeNodeComponent("div146"),
    div147: makeNodeComponent("div147"),
    freeShippingOnOrdersOver652: makeNodeComponent(
      "freeShippingOnOrdersOver652"
    ),
    text: makeNodeComponent("text"),
    div148: makeNodeComponent("div148"),
    ul5: makeNodeComponent("ul5"),
    svg11: makeNodeComponent("svg11"),
    svg12: makeNodeComponent("svg12"),
    svg6: makeNodeComponent("svg6"),

    // Metadata about props expected for PlasmicAnnouncementBar1440Px
    internalVariantProps: PlasmicAnnouncementBar1440Px__VariantProps,
    internalArgProps: PlasmicAnnouncementBar1440Px__ArgProps
  }
);

export default PlasmicAnnouncementBar1440Px;
/* prettier-ignore-end */
