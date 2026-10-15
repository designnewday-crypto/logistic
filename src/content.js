// All company figures, route examples and client stories below are fictional
// demonstration content, explicitly requested for this website prototype.
export const companyStats = [
  { value: '18', label: 'countries connected' },
  { value: '250+', label: 'shipments each month' },
  { value: '12', label: 'years of experience' },
];

export const routeGroups = {
  europe: {
    label: 'Europe', title: 'Closer to your European markets.',
    description: 'Road freight corridors connecting our Burgas base with business destinations across Europe.',
    mode: 'Road freight',
    routes: [
      { from: 'Burgas, Bulgaria', to: 'Vienna, Austria' },
      { from: 'Burgas, Bulgaria', to: 'Munich, Germany' },
      { from: 'Burgas, Bulgaria', to: 'Milan, Italy' },
      { from: 'Burgas, Bulgaria', to: 'Warsaw, Poland' },
    ],
  },
  blacksea: {
    label: 'Black Sea', title: 'A local base. A wider horizon.',
    description: 'Explore illustrative port and inland connections around the Black Sea, with Burgas as your starting point.',
    mode: 'Road & sea freight',
    routes: [
      { from: 'Burgas, Bulgaria', to: 'Constanța, Romania' },
      { from: 'Burgas, Bulgaria', to: 'Istanbul, Türkiye' },
      { from: 'Burgas, Bulgaria', to: 'Poti, Georgia' },
    ],
  },
  asia: {
    label: 'Asia', title: 'Bring your supply chain together.',
    description: 'Example import corridors combining international sea freight with onward transport and local coordination.',
    mode: 'Sea & multimodal freight',
    routes: [
      { from: 'Shanghai, China', to: 'Burgas, Bulgaria' },
      { from: 'Ningbo, China', to: 'Burgas, Bulgaria' },
      { from: 'Istanbul, Türkiye', to: 'Burgas, Bulgaria' },
    ],
  },
};

export const cargoTypes = [
  { icon: 'package', title: 'Palletised goods', text: 'Packaged shipments, from a few pallets to a full vehicle.', value: 'Palletised goods' },
  { icon: 'cube', title: 'Containerised cargo', text: 'Cargo planned around your container and port requirements.', value: 'Containerised cargo' },
  { icon: 'stack', title: 'General cargo', text: 'Everyday business goods with clear handling instructions.', value: 'General cargo' },
  { icon: 'gear', title: 'Machinery & equipment', text: 'Share dimensions, weight and loading requirements.', value: 'Other / not sure yet' },
  { icon: 'storefront', title: 'Retail & consumer goods', text: 'Stock replenishment and regular business deliveries.', value: 'General cargo' },
  { icon: 'ruler', title: 'Special requirements', text: 'Unusual dimensions or handling? Let’s discuss the details.', value: 'Other / not sure yet' },
];

export const benefits = [
  { icon: 'chats', title: 'One clear point of contact', text: 'Keep your questions, route details and next steps in one conversation.' },
  { icon: 'path', title: 'The route that fits your cargo', text: 'Consider road, sea or a combination around the shipment you need to move.' },
  { icon: 'clipboard', title: 'Paperwork, considered early', text: 'Review the information and documents needed before the journey begins.' },
  { icon: 'shield', title: 'Careful shipment planning', text: 'Bring packaging, handling and cargo-specific requirements into the plan.' },
  { icon: 'clock', title: 'Clear next steps', text: 'Agree the approach, key milestones and communication before booking.' },
  { icon: 'globe', title: 'A base on the Black Sea', text: 'Coordinate international enquiries through our office in Burgas, Bulgaria.' },
];

export const testimonials = [
  { quote: 'We had one person to speak to from the first question to the final delivery. That clarity made planning our next shipment much easier.', name: 'Elena P.', role: 'Procurement manager', company: 'Illustrative retail client' },
  { quote: 'The team explained the road and sea options in plain language. We could compare the approach and understand exactly what to prepare.', name: 'Martin K.', role: 'Operations director', company: 'Illustrative trading client' },
  { quote: 'Our cargo needed a little extra planning. The questions about dimensions, loading and documents helped us get the details right early.', name: 'Sofia D.', role: 'Supply chain coordinator', company: 'Illustrative equipment client' },
  { quote: 'Having a point of contact in Burgas helped bring the different parts of the journey together. The next steps were always easy to follow.', name: 'Alex R.', role: 'Import manager', company: 'Illustrative import client' },
];

export const guides = [
  { id: 'guide-quote', category: 'Shipment planning', icon: 'clipboard', title: 'What do we need to price your shipment?', summary: 'A useful enquiry starts with a few clear details. Here’s what to prepare.', paragraphs: [
    'Start with the collection and delivery locations. Include the city, country and whether the shipment needs collection from or delivery to a port, warehouse or business address.',
    'Add a description of the goods, estimated weight, packaging and dimensions. Pallet or container details help make the enquiry more useful. Mention any handling restrictions or unusual requirements.',
    'Finally, share your preferred timing and contact details. A route and price can be reviewed once the shipment information and service availability are confirmed.',
  ] },
  { id: 'guide-modes', category: 'Transport options', icon: 'arrows', title: 'Road or sea? Start with the right questions.', summary: 'Consider the cargo, the route and your priorities before choosing a transport mode.', paragraphs: [
    'The right transport option depends on where the cargo starts, where it needs to go, its size and your preferred delivery timing.',
    'Road freight can connect collection and delivery addresses directly. Sea freight is often considered for international container movements. Some journeys combine both, with inland transport at either end.',
    'Rather than choosing a mode in isolation, share the full journey and the cargo requirements. That gives the planning conversation a clear starting point.',
  ] },
  { id: 'guide-documents', category: 'Documents', icon: 'file', title: 'A clear document checklist saves questions later.', summary: 'Organise your cargo information before the shipment is ready to move.', paragraphs: [
    'A commercial invoice and packing information are common starting points for a freight enquiry. They help describe the goods, the parties involved and how the shipment is packaged.',
    'Transport and customs documents depend on the origin, destination, transport mode and the goods themselves. Requirements should be checked for the particular shipment.',
    'Tell the coordinator what you already have and what is still being prepared. Specific customs, regulatory or insurance requirements should be confirmed with the appropriate specialist before booking.',
  ] },
];

export const faqs = [
  { question: 'What information do I need for a quote?', answer: 'Share the collection and delivery locations, cargo type, estimated weight and your contact email. Dimensions, packaging and preferred timing will help make the next conversation more useful.' },
  { question: 'Can I combine road and sea freight?', answer: 'Some journeys involve more than one transport mode. Tell us the full collection-to-delivery route so the sea leg and inland transport can be considered together. Availability is confirmed for each shipment.' },
  { question: 'What if I only have a few pallets?', answer: 'Include the pallet count, dimensions and weight in your enquiry. This helps identify whether a consolidated or dedicated transport option is worth reviewing for your route.' },
  { question: 'Which documents should I prepare?', answer: 'Commercial invoice and packing information are useful starting points. Exact transport, customs and regulatory requirements depend on the shipment and should be confirmed before booking.' },
  { question: 'How will I receive shipment updates?', answer: 'The contact person, communication channel and update milestones should be agreed as part of the transport plan. This website concept does not include live shipment tracking.' },
  { question: 'Does the form book a shipment?', answer: 'No. This preview lets you review and download a shipment enquiry. It does not send a message, calculate a binding price or confirm a booking.' },
];
