export type LayerInfo = { id: string; num: number; title: string; what: string; points: string[] };

export type DiagramDef = {
  id: string;
  title: string;
  blurb: string;
  build: boolean; // show the "build it up" slider
  layers: LayerInfo[];
};

export const ENC_DIAGRAMS: DiagramDef[] = [
  {
    id: 'encOverview',
    title: 'The full stack, floor to ground',
    blurb: 'Cross-section from the house floor down to the dirt. Tap a layer, or drag the slider to build it up in work order.',
    build: true,
    layers: [
      { id: 'e1', num: 1, title: 'Clear and level the ground', what: 'The barrier is tough, but a sharp object under a foot or a pier can still cut it over time.', points: ['Remove debris, old insulation, and old plastic. Bag it.', 'Rake smooth. Pull rocks with sharp edges, wire, and nails.', 'Fill or level high and low spots when the bid includes leveling.'] },
      { id: 'e2', num: 2, title: 'Mold and mildew treatment', what: 'Applied to the joists, subfloor, and walls before anything gets covered.', points: ['Follow the product label for dwell and dry time.', 'Ventilate and wear the PPE on the label.', 'Mistake: covering treated wood before it is dry traps moisture against it.'] },
      { id: 'e3', num: 3, title: 'Block and seal foundation vents', what: 'Sealing vents stops outside humid air from entering the space you are conditioning.', points: ['Vent covers or foam board sealed in place.', 'Install access panels if they are on the bid.'] },
      { id: 'e4', num: 4, title: 'Seal every opening in the floor above', what: 'Part of every full encapsulation, and it must be named in the proposal.', points: ['Plumbing, wiring, and duct penetrations, plus any gaps.', 'Foam or caulk as appropriate.', 'Openings let moisture, odors, and pests move between the crawl space and the house.'] },
      { id: 'e5', num: 5, title: 'Spray foam the rim joists', what: 'Insulates and air seals where the rim meets the sill and the floor above.', points: ['DAP spray foam kit. Follow the label for temperature, thickness per pass, and curing.', 'Apply in even layers. Keep foam off wiring and away from heat sources.', 'Write the product and lot number on the job record.', 'Safety: respirator, gloves, and eye protection, with the space ventilated.'] },
      { id: 'e6', num: 6, title: '20-mil liner on the ground', what: 'Laid across the floor with slack so it does not tear when walked on.', points: ['Fit it around piers and posts. Do not stretch it tight.', 'Overlap seams at least 12 in (your call) and tape on clean, dry plastic.', 'Press the tape down from the center out. Dust and moisture are the usual reasons tape fails.'] },
      { id: 'e7', num: 7, title: 'Liner up the wall: sealant and tape', what: 'The sealant is the gasket. The tape over the top edge is the mechanical bond.', points: ['Brush the wall clean and let it dry. Prime rough or dusty block where the tape lands.', 'Bead of sealant 1 to 2 in below the planned top edge. Press the liner into it.', 'Once the sealant skins over, tape across the top edge: half on the liner, half on the wall.', 'Pilot test: hand-peel at 1 week and 1 month and compare to butyl tape.'] },
      { id: 'e8', num: 8, title: 'Wrap piers and posts', what: 'Cut the liner tight around each pier or post.', points: ['Tape every cut.', 'Tape across the top edge of the wrap, same as the wall.', 'Seal around plumbing and any other penetration through the liner.'] },
      { id: 'e9', num: 9, title: 'Dehumidifier', what: 'Keeps the sealed space dry year-round.', points: ['Level, on a stand or blocks, off the ground, plugged into a working outlet.', 'Drain per the bid: gravity to the exterior or sump, or a pump line that slopes to the discharge.', 'Test run it, set the humidistat (50 to 60 percent is common), and leave the care sheet.'] },
    ],
  },
  {
    id: 'encWall',
    title: 'Close-up: wall attachment',
    blurb: 'The sealant plus tape method being piloted in place of double-sided butyl tape. Thickness exaggerated.',
    build: false,
    layers: [
      { id: 'w1', num: 1, title: 'Primer strip (optional)', what: 'Helps the tape grip rough or dusty block.', points: ['Tape primer or masonry sealer on the strip where the tape lands.', 'The wall must be clean, dry, and dust-free first.'] },
      { id: 'w2', num: 2, title: 'Sealant bead', what: 'A continuous bead that acts as the gasket against the block.', points: ['No gaps or channels.', 'Allow the skin-over time on the label before taping.', 'Sealant often bonds poorly to polyethylene. Do not count on it alone.'] },
      { id: 'w3', num: 3, title: '20-mil liner', what: 'Pressed into the sealant and smoothed flat.', points: ['Runs up the wall to the height on the bid.', 'Continues across the ground.'] },
      { id: 'w4', num: 4, title: 'Vapor barrier tape', what: 'Runs across the top edge, half on the wall and half on the liner.', points: ['Press down firmly from the center out.', 'This is the real mechanical bond. If tape lifts on block, add mechanical fasteners.'] },
    ],
  },
  {
    id: 'encSeam',
    title: 'Close-up: ground seam',
    blurb: 'Seams overlap at least 12 in (suggested) with tape on clean, dry plastic.',
    build: false,
    layers: [
      { id: 's1', num: 1, title: 'Lower sheet', what: 'The first sheet laid on the ground.', points: ['Keep the overlap area clean and dry.'] },
      { id: 's2', num: 2, title: 'Seam tape', what: 'Seals the overlap.', points: ['Press from the center out.', 'Dust, dirt, and moisture are the usual reasons tape fails.'] },
      { id: 's3', num: 3, title: 'Upper sheet', what: 'Laid over the first with the overlap.', points: ['At least 12 in (your decision to confirm).'] },
    ],
  },
];

export const BELLY_DIAGRAMS: DiagramDef[] = [
  {
    id: 'bellyOverview',
    title: 'The full stack, floor to ground',
    blurb: 'Cross-section cut across the home, along a joist. Joists run across; beams run the length of the home. Tap a layer or drag the slider to build it up.',
    build: true,
    layers: [
      { id: 'b1', num: 1, title: 'Home floor and joists', what: 'Existing. This is repair only: never change the structure.', points: ['Joists run across the home, beam to beam.', 'If the floor is soft or the frame is damaged, stop and call Jason.', 'Fix plumbing leaks and reconnect and seal ducts before insulating.'] },
      { id: 'b2', num: 2, title: 'Insulation, full cavity', what: 'Match what was there before, sized to the joist cavity.', points: ['Fill the cavity fully with no gaps.', 'Do not compress it. Squashed insulation loses R-value.', 'Replace insulation that is wet, matted, or contaminated.', 'Follow the product instructions for facing direction.'] },
      { id: 'b3', num: 3, title: 'Water line protection (if on the bid)', what: 'Pipe insulation plus heat wrap where the bid calls for it.', points: ['Confirm there is a nearby outlet before wrapping a line with heat tape.'] },
      { id: 'b4', num: 4, title: 'Old belly wrap (existing)', what: 'Cut out what failed. Keep what is sound.', points: ['Remove torn or failed material and bag it.', 'Rodent droppings: wet them down first and wear a P100 respirator.'] },
      { id: 'b5', num: 5, title: 'Contact adhesive', what: 'On the bottom of the old belly wrap and the top of the new belly wrap.', points: ['Let it flash off to the tack time on the label before pressing together.', 'Ventilate and keep ignition sources away. Many contact adhesives are flammable.'] },
      { id: 'b6', num: 6, title: 'New belly wrap, bowl shape', what: 'Hangs between the beams like the factory original, and it is also the rodent barrier.', points: ['Measure and cut beam to beam.', 'Let it hang in a bowl shape. Do not let it sag below the bowl.', 'Overlap seams.'] },
      { id: 'b7', num: 7, title: '1x2 strips along each beam', what: 'The strip sits under the wrap edge, tight against the beam, and is screwed up through the wrap into the bottom of the joist.', points: ['The wrap edge goes up against the joist bottom, so the wrap is between the joist and the strip.', 'This pins the wrap and holds the bowl up permanently.', 'Pre-drill near the ends to avoid splitting. Avoid pipes and wires.', 'To confirm: lumber grade, fastener type and spacing.'] },
      { id: 'b8', num: 8, title: 'Deck joint tape', what: 'Used in place of standard belly repair tape, which has not lasted.', points: ['Over seams, repaired rips, and penetrations.', 'Clean and dry the surface first, then press firmly with no lifted edges.'] },
    ],
  },
  {
    id: 'bellyPlan',
    title: 'Plan view: which way the strips run',
    blurb: 'Looking up from underneath. The joists run across, and the 1x2 strips run along the beams.',
    build: false,
    layers: [
      { id: 'p1', num: 1, title: 'Floor joists', what: 'Run across the home, perpendicular to the beams.', points: ['The strips do not run along the joists.'] },
      { id: 'p2', num: 2, title: 'Beams', what: 'Run the length of the home.', points: ['Joists sit on top of the beams.'] },
      { id: 'p3', num: 3, title: '1x2 strips', what: 'Run the full length of each beam, tight against the beam edge.', points: ['Screwed up through the wrap into the joist bottoms.', 'Seals the edge and gives the wrap a permanent retainer.'] },
    ],
  },
];
