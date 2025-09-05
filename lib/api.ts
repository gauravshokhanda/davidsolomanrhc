// API service functions for the frontend
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token in requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage if available
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication services
export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", { email, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  register: async (name: string, email: string, password: string) => {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser: () => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user") || "{}");
    }
    return {};
  },

  isAuthenticated: () => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("token");
    }
    return false;
  },

  getProfile: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  updateProfile: async (userData: any) => {
    const response = await api.put("/auth/update", userData);
    return response.data;
  },
};

// Pages services
export const pageService = {
  getAllPages: async () => {
    const response = await api.get("/pages");
    return response.data;
  },

  getPageBySlug: async (slug: string) => {
    const response = await api.get(`/pages/${slug}`);
    return response.data;
  },

  createPage: async (pageData: any) => {
    const response = await api.post("/pages", pageData);
    return response.data;
  },

  updatePage: async (id: string, pageData: any) => {
    const response = await api.put(`/pages/${id}`, pageData);
    return response.data;
  },

  deletePage: async (id: string) => {
    const response = await api.delete(`/pages/${id}`);
    return response.data;
  },
};


export const journalService = {

  getHero: async () => {
    const response = await api.get("/journal/hero");
    return response.data;
  },

  createHero: async (formData: FormData) => {
    const response = await api.post("/journal/hero", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  updateHero: async (formData: FormData) => {
    const response = await api.put("/journal/hero", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  deleteHero: async () => {
    const response = await api.delete("/journal/hero");
    return response.data;
  },

  // ===== POSTS CRUD =====
  getAllPosts: async () => {
    const response = await api.get("/journal/posts");
    return response.data;
  },

  getPostById: async (id: string) => {
    const response = await api.get(`/journal/posts/${id}`);
    return response.data;
  },

  createPost: async (formData: FormData) => {
    const response = await api.post("/journal/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  updatePost: async (id: string, formData: FormData) => {
    const response = await api.put(`/journal/posts/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  deletePost: async (id: string) => {
    const response = await api.delete(`/journal/posts/${id}`);
    return response.data;
  },
};




// Projects services
export const projectService = {
  getAllProjects: async () => {
    const response = await api.get("/projects");
    return response.data;
  },

  getProjectBySlug: async (slug: string) => {
    const response = await api.get(`/projects/${slug}`);
    return response.data;
  },

  createProject: async (projectData: any) => {
    const response = await api.post("/projects", projectData);
    return response.data;
  },

  updateProject: async (id: string, projectData: any) => {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data;
  },

  deleteProject: async (id: string) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  },
};

// Media services
export const mediaService = {
  getAllMedia: async () => {
    const response = await api.get("/media");
    return response.data;
  },

  getMediaById: async (id: string) => {
    const response = await api.get(`/media/${id}`);
    return response.data;
  },

  uploadMedia: async (formData: FormData) => {
    const response = await api.post("/media", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  updateMedia: async (id: string, mediaData: any) => {
    const response = await api.put(`/media/${id}`, mediaData);
    return response.data;
  },

  deleteMedia: async (id: string) => {
    const response = await api.delete(`/media/${id}`);
    return response.data;
  },
};

// Slides services
export const slideService = {
  getAllSlides: async () => {
    const response = await api.get("/slides");
    return response.data;
  },

  getSlideById: async (id: string) => {
    const response = await api.get(`/slides/${id}`);
    return response.data;
  },

  createSlide: async (formData: FormData) => {
    const response = await api.post("/slides", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteSlide: async (id: string) => {
    const response = await api.delete(`/slides/${id}`);
    return response.data;
  },
  updateSlide: async (id: string, formData: FormData) => {
    const response = await api.put(`/slides/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};

// Settings services
export const settingService = {
  getAllSettings: async () => {
    const response = await api.get("/settings");
    return response.data;
  },

  getSettingsByCategory: async (category: string) => {
    const response = await api.get(`/settings/${category}`);
    return response.data;
  },

  updateSetting: async (key: string, value: any) => {
    const response = await api.put(`/settings/${key}`, { value });
    return response.data;
  },

  deleteSetting: async (key: string) => {
    const response = await api.delete(`/settings/${key}`);
    return response.data;
  },
};

export default api;
