/**
 * ���s�̃C�x���g��� �I�[�v���f�[�^���f��.
 * @remarks
 * �C�x���gAPI���瓾����������f�����������́B
 * @see https://eventapp.city.kawasaki.jp/data/api/v1/reference.html
 */

/**
 * �C�x���g���i�y�[�W�j.
 * @remarks
 * �C�x���gAPI���瓾����P�y�[�W�Ԃ�̏��B
 */
export interface EventPage {
    /** �y�[�W�ԍ� */
    page: number;
    /** �ő�y�[�W�ԍ� */
    total_pages: number;
    /** ������ */
    total_numbers: number;
    /** �C�x���g��񃊃X�g */
    event_data: Event[];
}

/**
 * �C�x���g���.
 */
export interface Event {
    /** �C�x���g���� */
    title: string;
    /** �C�x���g�T�v */
    content: string;
    /** �X�e�[�^�X */
    status: string;
    /** �X�e�[�^�X�i�⑫�j */
    status_ext: string;
    /** �J�Ó����X�g */
    date_list: EventDate[];
    /** �C�x���g�̎�� */
    type1: string;
    /** �C�x���g�̎�ʁi��́j */
    type2: string;
    /** �Ώێ� */
    target: string;
    /** �Ώێҁi�⑫�j */
    target_ext: string;
    /** �Ώێҁi���ʁj */
    target_sex: string;
    /** �Ώێҁi�n��j */
    target_area: string;
    /** �Ώێҁi�n��⑫�j */
    target_area_ext: string;
    /** �J�Ïꏊ */
    place: string;
    /** �J�Ïꏊ�i�X�֔ԍ��j */
    place_zip: string;
    /** �J�Ïꏊ�i�Z���j */
    place_adr: string;
    /** �J�Ïꏊ�i�ܓx�j */
    place_lat: number;
    /** �J�Ïꏊ�i�y�x�j */
    place_lon: number;
    /** �Q����p�i�⑫�j */
    cost_ext: string;
    /** ����i�⑫�j */
    capacity_ext: string;
    /** �\�����ݕ��@���X�g */
    entry_list: Entry[];
    /** ���̑����l�Ȃ� */
    note: string;
    /** �֘AURL���X�g */
    rel_list: RelationUrl[];
    /** ��Î� */
    organizer: string;
    /** �₢���킹�惊�X�g */
    contact_list: Contact[];
    /** �ŏI�X�V�� */
    upd_date: string;
    /** �o�^�� */
    created_date: string;
}

/**
 * �₢���킹��.
 */
export interface Contact {
    /** �₢���킹�� */
    contact: string;
    /** �d�b�ԍ� */
    contact_tel: string;
    /** FAX�ԍ� */
    contact_fax: string;
    /** ���[���A�h���X */
    contact_mail: string;
    /** �⑫ */
    contact_ext: string;
}

/**
 * �֘AURL.
 */
export interface RelationUrl {
    /** �֘AURL�ialt�e�L�X�g�j */
    rel_alt: string;
    /** �֘AURL */
    rel_url: string;
}

/**
 * �\�����ݕ��@.
 * */
export interface Entry {
    /** �\�����݊J�n���i���t�j */
    entry_from?: string;
    /** �\�����ݒ��ؓ��i���t�j */
    entry_to?: string;
    /** �d�b�ԍ� */
    entry_tel: string;
    /** FAX�ԍ� */
    entry_fax: string;
    /** ���[���A�h���X */
    entry_mail: string;
    /** URL */
    entry_url: string;
    /** �X�֔ԍ� */
    entry_postcode: string;
    /** ���� */
    entry_post: string;
    /** �⑫ */
    entry_ext: string;
    /** �\�����݊J�n���i�j���j */
    entry_to_w?: string;
    /** �\�����ݒ��ؓ��i�j���j */
    entry_from_w?: string;
}

/**
 * �J�Ó�.
 */
export interface EventDate {
    /** �J�Ó� */
    date: string;
    /** �J�Î���(from) */
    time_from: string;
    /** �J�Î���(to) */
    time_to: string;
    /** �J�Ó�����O */
    time_ext: string;
    /** �J�Ó��i�j���j */
    date_w: string;
}