/**
 * 川崎市のイベント情報 オープンデータモデル.
 * @remarks
 * イベントAPIから得られる情報をモデル化したもの。
 * @see https://eventapp.city.kawasaki.jp/data/api/v1/reference.html
 */

/**
 * イベント情報（ページ）.
 * @remarks
 * イベントAPIから得られる１ページぶんの情報。
 */
export interface EventPage {
    /** ページ番号 */
    page: number;
    /** 最大ページ番号 */
    total_pages: number;
    /** 総件数 */
    total_numbers: number;
    /** イベント情報リスト */
    event_data: Event[];
}

/**
 * イベント情報.
 */
export interface Event {
    /** イベント名称 */
    title: string;
    /** イベント概要 */
    content: string;
    /** ステータス */
    status: string;
    /** ステータス（補足） */
    status_ext: string;
    /** 開催日リスト */
    date_list: EventDate[];
    /** イベントの種別 */
    type1: string;
    /** イベントの種別（主体） */
    type2: string;
    /** 対象者 */
    target: string;
    /** 対象者（補足） */
    target_ext: string;
    /** 対象者（性別） */
    target_sex: string;
    /** 対象者（地域） */
    target_area: string;
    /** 対象者（地域補足） */
    target_area_ext: string;
    /** 開催場所 */
    place: string;
    /** 開催場所（郵便番号） */
    place_zip: string;
    /** 開催場所（住所） */
    place_adr: string;
    /** 開催場所（緯度） */
    place_lat: number;
    /** 開催場所（軽度） */
    place_lon: number;
    /** 参加費用（補足） */
    cost_ext: string;
    /** 定員（補足） */
    capacity_ext: string;
    /** 申し込み方法リスト */
    entry_list: Entry[];
    /** その他備考など */
    note: string;
    /** 関連URLリスト */
    rel_list: RelationUrl[];
    /** 主催者 */
    organizer: string;
    /** 問い合わせ先リスト */
    contact_list: Contact[];
    /** 最終更新日 */
    upd_date: string;
    /** 登録日 */
    created_date: string;
}

/**
 * 問い合わせ先.
 */
export interface Contact {
    /** 問い合わせ先 */
    contact: string;
    /** 電話番号 */
    contact_tel: string;
    /** FAX番号 */
    contact_fax: string;
    /** メールアドレス */
    contact_mail: string;
    /** 補足 */
    contact_ext: string;
}

/**
 * 関連URL.
 */
export interface RelationUrl {
    /** 関連URL（altテキスト） */
    rel_alt: string;
    /** 関連URL */
    rel_url: string;
}

/**
 * 申し込み方法.
 * */
export interface Entry {
    /** 申し込み開始日（日付） */
    entry_from?: string;
    /** 申し込み締切日（日付） */
    entry_to?: string;
    /** 電話番号 */
    entry_tel: string;
    /** FAX番号 */
    entry_fax: string;
    /** メールアドレス */
    entry_mail: string;
    /** URL */
    entry_url: string;
    /** 郵便番号 */
    entry_postcode: string;
    /** 宛先 */
    entry_post: string;
    /** 補足 */
    entry_ext: string;
    /** 申し込み開始日（曜日） */
    entry_to_w?: string;
    /** 申し込み締切日（曜日） */
    entry_from_w?: string;
}

/**
 * 開催日.
 */
export interface EventDate {
    /** 開催日 */
    date: string;
    /** 開催時間(from) */
    time_from: string;
    /** 開催時間(to) */
    time_to: string;
    /** 開催日時例外 */
    time_ext: string;
    /** 開催日（曜日） */
    date_w: string;
}