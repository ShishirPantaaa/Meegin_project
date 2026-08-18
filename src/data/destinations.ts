import type { Destination, Place } from "@/types";
import { pokhara } from "./destinations/pokhara/pokhara";
import { mustang } from "./destinations/mustang/mustang";
import { chitwan } from "./destinations/chitwan/chitwan";
import { lumbini } from "./destinations/lumbini/lumbini";
import { palpa } from "./destinations/palpa/palpa";
import { baglung } from "./destinations/baglung/baglung";
import { kathmandu } from "./destinations/kathmandu/kathmandu";
import { bandipur } from "./destinations/bandipur/bandipur";
import { ghandruk } from "./destinations/ghandruk/ghandruk";
import { annapurna } from "./destinations/annapurna/annapurna";
import { everest } from "./destinations/everest/everest";
import { bhaktapur } from "./destinations/bhaktapur/bhaktapur";

export { pokhara, mustang, chitwan, lumbini, palpa, baglung, kathmandu, bandipur, ghandruk, annapurna, everest, bhaktapur };

export const destinations: Destination[] = [pokhara, mustang, chitwan, lumbini, palpa, baglung, kathmandu, bandipur, ghandruk, annapurna, everest, bhaktapur];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function getPlaceBySlug(
  destinationSlug: string,
  placeSlug: string
): Place | undefined {
  const destination = getDestinationBySlug(destinationSlug);
  return destination?.places.find((place) => place.slug === placeSlug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((destination) => destination.featured);
}

export function getDestinationsByRegion(region: string): Destination[] {
  return destinations.filter((destination) => destination.region === region);
}
