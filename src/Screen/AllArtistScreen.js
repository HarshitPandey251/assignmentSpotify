import React from "react";
import { Link } from "react-router-dom";

const AllArtistScreen = () => {
  return (
    <div className="w-3/4 mr-auto ml-auto mt-10">
      <table class="min-w-full">
        <thead class="bg-white border-b">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Artist
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Date of Birth
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Songs
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100 border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mark
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Otto
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @mdo
            </td>
          </tr>
          <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jacob
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Thornton
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @fat
            </td>
          </tr>
          <tr class="bg-gray-100 border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jacob
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Thornton
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              @fat
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllArtistScreen;
