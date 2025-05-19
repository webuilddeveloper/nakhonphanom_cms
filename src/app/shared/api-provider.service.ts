import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProviderService {

  news = {
    create: 'news/create',
    read: 'news/read',
    update: 'news/update',
    delete: 'news/delete',
    category: {
      create: 'news/category/create',
      read: 'news/category/read',
      update: 'news/category/update',
      delete: 'news/category/delete',
    },
    gallery: {
      create: 'news/gallery/create',
      read: 'news/gallery/read',
      update: 'news/gallery/update',
      delete: 'news/gallery/delete',
    }
  };

  comingSoon = {
    create: 'comingSoon/create',
    read: 'comingSoon/read',
    update: 'comingSoon/update',
    delete: 'comingSoon/delete',
    category: {
      create: 'comingSoon/category/create',
      read: 'comingSoon/category/read',
      update: 'comingSoon/category/update',
      delete: 'comingSoon/category/delete',
    },
    gallery: {
      create: 'comingSoon/gallery/create',
      read: 'comingSoon/gallery/read',
      update: 'comingSoon/gallery/update',
      delete: 'comingSoon/gallery/delete',
    }
  };

  fund = {
    create: 'fund/create',
    read: 'fund/read',
    update: 'fund/update',
    delete: 'fund/delete',
    category: {
      create: 'fund/category/create',
      read: 'fund/category/read',
      update: 'fund/category/update',
      delete: 'fund/category/delete',
    },
    gallery: {
      create: 'fund/gallery/create',
      read: 'fund/gallery/read',
      update: 'fund/gallery/update',
      delete: 'fund/gallery/delete',
    }
  };
  
  policy = {
    create: 'policy/create',
    read: 'policy/read',
    update: 'policy/update',
    delete: 'policy/delete',
    gallery: {
      create: 'policy/gallery/create',
      read: 'policy/gallery/read',
      update: 'policy/gallery/update',
      delete: 'policy/gallery/delete',
    }
  };

  constructor() { }
}
