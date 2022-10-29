export type ConsoleDates = {
  platform_name: string;
  first_retail_availability: string;
  discontinued: string;
  units_sold_mill: number;
  platform_comment: string;
};

export type ConsoleGames = {
  game_rank: number;
  game_name: string;
  platform: string;
  game_year: number;
  genre: string;
  publisher: string;
  na_sales: number;
  eu_sales: number;
  jp_sales: number;
  other_sales: number;
};

export type ConsumerComplaints = {
  date_received: string;
  product_name: string;
  sub_product: string;
  issue: string;
  sub_issue: string;
  consumer_complaint_narrative: string;
  company_public_response: string;
  company: string;
  state_name: string;
  zip_code: number;
  tags: string;
  consumer_consent_provided: string;
  submitted_via: string;
  date_sent: string;
  company_response_to_consumer: string;
  timely_response: string;
  consumer_disputed: string;
  complaint_id: number;
};
