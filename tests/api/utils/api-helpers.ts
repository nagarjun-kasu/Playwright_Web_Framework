/**
 * API helper module — thin wrappers around the Restful Booker endpoints.
 *
 * Each function accepts an APIRequestContext (provided by Playwright) and
 * returns the raw APIResponse so that individual tests can assert on status
 * codes, headers, and bodies independently.
 */

import { APIRequestContext } from "@playwright/test";
import type {
  AuthPayload,
  BookingPayload,
} from "./types";

// ─── Auth ──────────────────────────────────────────────────────────────────────

/**
 * POST /auth — Create an authentication token.
 */
export async function createToken(
  request: APIRequestContext,
  payload: AuthPayload
) {
  return request.post(process.env.API_BASE_URL+"/auth", { data: payload });
}

// ─── Booking CRUD ──────────────────────────────────────────────────────────────
/**
 * POST /booking — Create a new booking.
 */
export async function createBooking(
  request: APIRequestContext,
  payload: BookingPayload
) {
  return request.post(process.env.API_BASE_URL+"/booking", {
    data: payload,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * GET /booking/:id — Retrieve a single booking by its ID.
 */
export async function getBooking(
  request: APIRequestContext,
  id: number
) {
  return request.get(process.env.API_BASE_URL+`/booking/${id}`);
}

/**
 * GET /booking — Retrieve all booking IDs (optionally filtered by query params).
 */
export async function getBookingIds(
  request: APIRequestContext,
  params?: Record<string, string>
) {
  return request.get(process.env.API_BASE_URL+`/booking`, { params });
}

/**
 * PUT /booking/:id — Full update of an existing booking (requires auth).
 */
export async function updateBooking(
  request: APIRequestContext,
  id: number,
  payload: BookingPayload,
  token: string
) {
  return request.put(process.env.API_BASE_URL+`/booking/${id}`, {
    data: payload,
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${token}`,
    },
  });
}

/**
 * PATCH /booking/:id — Partial update of an existing booking (requires auth).
 */
export async function partialUpdateBooking(
  request: APIRequestContext,
  id: number,
  payload: Partial<BookingPayload>,
  token: string
) {
  return request.patch(process.env.API_BASE_URL+`/booking/${id}`, {
    data: payload,
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${token}`,
    },
  });
}

/**
 * DELETE /booking/:id — Delete a booking (requires auth).
 */
export async function deleteBooking(
  request: APIRequestContext,
  id: number,
  token: string
) {
  return request.delete(process.env.API_BASE_URL+`/booking/${id}`, {
    headers: {
      Cookie: `token=${token}`,
    },
  });
}

// ─── Ping ──────────────────────────────────────────────────────────────────────

/**
 * GET /ping — Health-check endpoint.
 */
export async function healthCheck(request: APIRequestContext) {
  return request.get(process.env.API_BASE_URL+`/ping`);
}