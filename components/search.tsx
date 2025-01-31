"use client";
import algo from "algoliasearch/lite";
import type { SharedProps } from "fumadocs-ui/components/dialog/search";
import SearchDialog from "fumadocs-ui/components/dialog/search-algolia";

const client = algo("41DM5WWKWL", "eb5297c4b1d627aecf02253c56972e2e");

const index = client.initIndex("indexName");

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog index={index} {...props} />;
}
